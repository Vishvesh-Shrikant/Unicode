//URL for API 
const API_KEY="8f17af4f928e7fc0f4ff0e12b9c16351"
const WEATHER_URL=`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`
const GEO_URL=`http://api.openweathermap.org/geo/1.0/reverse?appid=${API_KEY}&limit=1&`
const FORECAST_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&cnt=6&q=`
const UNITS="&units="
let unit="metric"

//for celcius-farhenheit toggle 
const toggleButton=document.querySelector(".toggler")
const tempUnit=document.querySelector(".temp-unit")

//DOM elements for displaying current temperature, wind speed and humidity
const yourLocation=document.querySelector(".your-location")
const search=document.querySelector(".search-btn")
const input=document.querySelector("form input");
const tempetaure=document.querySelector(".temp-details .temp")
const windSpeed=document.querySelector(".wind-speed .data .value")
const humidity=document.querySelector(".humidity .data .value")

//DOM elements for forecast details
const forecast_container=document.querySelector(".forecast")
const forecast_unit=document.querySelectorAll(".forecast-unit")
const forecast_dates=document.querySelectorAll(".date-time")
const forecast_data=document.querySelectorAll(".forecast-details .data")


//for toggling and changing information from celcius to farhenheit
const celciusClick= async()=>{
    toggleButton.style.left='0'
    unit="metric"
    tempUnit.innerText="°C"
    for(i=0;i<forecast_unit.length;i++)
    {
        forecast_unit[i].innerText="°C"
    }
    if(input.value!='')
    {
        getCurrentWeatherData(input.value)
        getWeatherForecast(input.value)
    }
}
const farhenheitClick=async ()=>{
    toggleButton.style.left='50%'
    unit="imperial"
    tempUnit.innerText="°F"
    for(i=0;i<forecast_unit.length;i++)
    {
        forecast_unit[i].innerText="°F"
    }
    if(input.value!='')
    {
        getCurrentWeatherData(input.value)
        getWeatherForecast(input.value)
    }
        
}


//getting data from api on submission of input 
search.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input.value!='')
    {
        getCurrentWeatherData(input.value)
        getWeatherForecast(input.value)
    }
})

yourLocation.addEventListener("click",(e)=>{
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
    e.preventDefault();
})

//GETS CITY NAME IF LOCATION PERMISIION IS ALLPWED BY USER
const onSuccess=async(position)=>{
    let lat=position.coords.latitude
    let long=position.coords.longitude
    const LATLONG_URL=`${GEO_URL}lat=${lat}&lon=${long}`
    
    //gets location of user based on latitude and longitude
    let response=await fetch(LATLONG_URL)
    let data=await response.json()
    input.value=data[0].name
    getCurrentWeatherData(data[0].name)
    getWeatherForecast(data[0].name)
}
//THROWS ALERT IF USER DENIES LOCATION ACCESSS
const onError=()=>{
    alert("You denied location , weather not found")
}


//GETS THE DATA REQUIRED FROM API (TEMPERATURE, WIND SPEED , HUMIDITY)
const getCurrentWeatherData=async (city)=>{
    //making input value valid for the URL 
    if(city.trim().includes(" "))
    {
        newCity=city.replace(" ","+")
        city=newCity
        city=city.toLowerCase()
    }    
    let URL=`${WEATHER_URL}${city}${UNITS}${unit}`
    
    //fetching data from API using async-await
    let response= await fetch(URL);
    let data= await response.json();

    //changing required data and updating in DOM
    //updating temperature 
    const temp_data=Math.ceil(data.main.temp)
    tempetaure.innerText=temp_data
    //Updating wind speed in mph
    if(unit==="metric"){
        let wind_data=Math.ceil((data.wind.speed)*2.23)
        windSpeed.innerText=wind_data
    }  
    else{
        wind_data=Math.ceil(data.wind.speed)
        windSpeed.innerText=wind_data
    }
    //updating humidity
    const humidity_data=data.main.humidity
    humidity.innerText=humidity_data
}

//GET FORECAST FOR LOCATION
const getWeatherForecast=async (city)=>{
    let URL=`${FORECAST_URL}${city}${UNITS}${unit}`
    
    let response=await fetch(URL)
    let data=await response.json()
    //making the forecast conatiner visible 
    forecast_container.style.visibility="visible"
    //adding values to the forecast elements
    for(let i=0;i<forecast_dates.length;i++)
    {
        forecast_dates[i].innerText=data.list[i].dt_txt
        forecast_data[i].innerText=Math.ceil(data.list[i].main.temp)
    }
}
