const API='https://se-tasks.vercel.app/events'

const container=document.querySelector(".card-container")
//Fetching data from the API 
const getData=async ()=>{
    let response= await fetch(API)
    let data=await response.json()
    printData(data)
}

//Displaying Name, time , date and location 
const printData=(data)=>{
    for(let i=0; i<data.length;i++)
    {
        const eventName=data[i].name
        const eventDate=data[i].date.slice(0,10)
        const eventTime=data[i].time
        const eventLocation=data[i].venue
        const eventDescription=data[i].description
        const eventPrice=data[i].price
        const eventTickets=data[i].availableTickets

        if(i%3==0)
        {
            let card=document.createElement("div")
            card.classList.add("card")
            card.innerHTML=
              `<p class="event-name">${eventName}</p>
              <p class="event desc">${eventDescription}</p>
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
                <div class="event money">
                    <i class="fa-solid fa-money-bill"></i>
                    <p class="data">$${eventPrice}</p>
                </div>
                <div class="event tickets">
                    <i class="fa-solid fa-ticket"></i>
                    <p class="data">${eventTickets} Available</p>
                </div>`
            container.appendChild(card)
            const desc=card.querySelector(".desc")
            const money=card.querySelector(".money")
            const tickets=card.querySelector(".tickets")

            desc.style.display ="none"
            money.style.display="none"
            tickets.style.display="none"

            card.addEventListener("click",()=>{
                card.classList.toggle("clicked")
                if(card.classList.contains("clicked")) {
                    desc.style.display="flex" 
                    money.style.display="flex"
                    tickets.style.display="flex"
                    card.style.height="100%"
                }
                else
                {
                    desc.style.display ="none"
                    money.style.display="none"
                    tickets.style.display="none"
                }
            })
        }
        if(i%3==1)
        {   
            let card=document.createElement("div")
            card.classList.add("card2")
            card.innerHTML=
              `<p class="event-name">${eventName}</p>
              <p class="event desc">${eventDescription}</p>
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
                <div class="event money">
                    <i class="fa-solid fa-money-bill"></i>
                    <p class="data">$${eventPrice}</p>
                </div>
                <div class="event tickets">
                    <i class="fa-solid fa-ticket"></i>
                    <p class="data">${eventTickets} Available</p>
                </div>`
            container.appendChild(card)
            const desc=card.querySelector(".desc")
            const money=card.querySelector(".money")
            const tickets=card.querySelector(".tickets")

            desc.style.display ="none"
            money.style.display="none"
            tickets.style.display="none"

            card.addEventListener("click",()=>{
                card.classList.toggle("clicked")
                if(card.classList.contains("clicked")) {
                    desc.style.display="flex" 
                    money.style.display="flex"
                    tickets.style.display="flex"
                    card.style.height="100%"
                }
                else
                {
                    desc.style.display ="none"
                    money.style.display="none"
                    tickets.style.display="none"
                }
            })
        }
        if(i%3==2)
        {   
            let card=document.createElement("div")
            card.classList.add("card3")
            card.innerHTML=
              `<p class="event-name">${eventName}</p>
              <p class="event desc">${eventDescription}</p>
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
                <div class="event money">
                    <i class="fa-solid fa-money-bill"></i>
                    <p class="data">$${eventPrice}</p>
                </div>
                <div class="event tickets">
                    <i class="fa-solid fa-ticket"></i>
                    <p class="data">${eventTickets} Available</p>
                </div>`
            container.appendChild(card)
            const desc=card.querySelector(".desc")
            const money=card.querySelector(".money")
            const tickets=card.querySelector(".tickets")

            desc.style.display ="none"
            money.style.display="none"
            tickets.style.display="none"

            card.addEventListener("click",()=>{
                card.classList.toggle("clicked") 
                if(card.classList.contains("clicked")) {
                    desc.style.display="flex" 
                    money.style.display="flex"
                    tickets.style.display="flex"
                    card.style.height="100%"
                }
                else
                {
                    desc.style.display ="none"
                    money.style.display="none"
                    tickets.style.display="none"
                }
            })
        }
    }
}

getData()
