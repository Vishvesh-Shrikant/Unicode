const API='https://se-tasks.vercel.app/events'

const container=document.querySelector(".card-container")
const singleEvent=document.querySelector(".single-event")
const singleEventContainer=document.querySelector(".details-container")
//Fetching data from the API 
const getData=async ()=>{
    let response= await fetch(API)
    let data=await response.json()
    printData(data)
    
}

const selectedData=(data, id, textColour)=>
{
    console.log("Hello World")
    for(let i=0; i<data.length;i++)
    {
        if(data[i]._id==id)
        {
            singleEvent.style.display="block"
            singleEventContainer.style.color=textColour
            const eventName=data[i].name
            const eventDate=data[i].date.slice(0,10)
            const eventTime=data[i].time
            const eventLocation=data[i].venue
            const eventDescription=data[i].description
            const eventPrice=data[i].ticketPrice
            const eventTickets=data[i].availableTickets

           singleEventContainer.innerHTML=
            `<p class="singleEvent-name">${eventName}</p>
              <p class="event desc">${eventDescription}</p>
                <div class="singleEvent">
                     <i class="fa-regular fa-calendar-days"></i>
                    <p class="data">${eventDate}</p>
                </div>
                <div class="singleEvent">
                    <i class="fa-regular fa-clock"></i>
                     <p class="data">${eventTime}</p>
                </div>
                <div class="singleEvent">
                    <i class="fa-solid fa-map-pin"></i>
                    <p class="data">${eventLocation}</p>
                </div>
                <div class="singleEvent ">
                    <i class="fa-solid fa-money-bill"></i>
                    <p class="data">$${eventPrice}</p>
                </div>
                <div class="singleEvent ">
                    <i class="fa-solid fa-ticket"></i>
                    <p class="data">${eventTickets} Available</p>
                </div>
                <div class="close">
                    <i class="fa-solid fa-xmark"></i>
                 </div>`
            
            const close=document.querySelector(".close")
            close.addEventListener("click",()=>{
                singleEvent.style.display="none"
            })
        }
        else
        continue
    }  
}

//Displaying Name, time , date and location 
const printData=(data)=>{
    for(let i=0; i<data.length;i++)
    {
        const eventName=data[i].name
        const eventDate=data[i].date.slice(0,10)
        const eventTime=data[i].time
        const eventLocation=data[i].venue

        if(i%3==0)
        {
            let card=document.createElement("div")
            card.classList.add("card")
            card.innerHTML=
              `<p class="event-name">${eventName}</p>
                <div class="event">
                     <i class="fa-regular fa-calendar-days"></i>
                    <p class="data">${eventDate}</p>
                </div>
                <div class="event">
                    <i class="fa-regular fa-clock"></i>
                     <p class="data">${eventTime}</p>
                </div>
                <div class="event">
                    <i class="fa-solid fa-map-pin"></i>
                    <p class="data">${eventLocation}</p>
                </div>
                `
            container.appendChild(card)
            card.addEventListener("click",()=>{
                window.scrollTo(0,0)
                selectedData(data, data[i]._id,"#08A4BD")
            })
        }
        if(i%3==1)
        {   
            let card=document.createElement("div")
            card.classList.add("card2")
            card.innerHTML=
              `<p class="event-name">${eventName}</p>
                <div class="event">
                     <i class="fa-regular fa-calendar-days"></i>
                    <p class="data">${eventDate}</p>
                </div>
                <div class="event">
                    <i class="fa-regular fa-clock"></i>
                     <p class="data">${eventTime}</p>
                </div>
                <div class="event">
                    <i class="fa-solid fa-map-pin"></i>
                    <p class="data">${eventLocation}</p>
                </div>`
            container.appendChild(card)
            card.addEventListener("click",()=>{
                window.scrollTo(0,0)
                selectedData(data, data[i]._id,"#D1E3DD")

            })
        }
        if(i%3==2)
        {   
            let card=document.createElement("div")
            card.classList.add("card3")
            card.innerHTML=
              `<p class="event-name">${eventName}</p>
                <div class="event">
                     <i class="fa-regular fa-calendar-days"></i>
                    <p class="data">${eventDate}</p>
                </div>
                <div class="event">
                    <i class="fa-regular fa-clock"></i>
                     <p class="data">${eventTime}</p>
                </div>
                <div class="event">
                    <i class="fa-solid fa-map-pin"></i>
                    <p class="data">${eventLocation}</p>
                </div>`
            container.appendChild(card)
            card.addEventListener("click",()=>{
                window.scrollTo(0,0)
                selectedData(data, data[i]._id,"#FAA381")
            })
        }
    }
}

getData()
