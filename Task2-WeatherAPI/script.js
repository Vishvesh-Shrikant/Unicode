//URL for API 
const API_KEY="8f17af4f928e7fc0f4ff0e12b9c16351"
const URL=`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`
const UNITS="&units="
let unit="metric"

//for celcius-farhenheit toggle 
const toggleButton=document.querySelector(".toggler")
const tempUnit=document.querySelector(".temp-unit")

//DOM elements for displaying json data
const tempetaure=document.querySelector(".temp-details .temp")
const windSpeed=document.querySelector(".wind-speed .data .value")
const humidity=document.querySelector(".humidity .data .value")

//for toggling and changing information from celcius to farhenheit
const celciusClick=()=>{
    toggleButton.style.left='0'
    unit="metric"
    tempUnit.innerText="°C"
}
const farhenheitClick=()=>{
    toggleButton.style.left='50%'
    unit="imperial"
    tempUnit.innerText="°F"
}


