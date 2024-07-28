const express= require("express")
const http=require("http")
const app=express()
const port= 8000

app.get('/', (req, res)=>{
    res.send("Welcome to Harry Potter")
})
app.get('/characters', async (req,res)=>{
    let response= await fetch("https://hp-api.onrender.com/api/characters")
    let data= await response.json()
    res.status(200).send(data)
})
app.get('/characters/:id', async (req,res)=>{
    let response= await fetch("https://hp-api.onrender.com/api/characters")
    let data= await response.json()
    let id=req.params.id
    let newData=data.filter((datas)=> datas.id===id)
    res.status(200).send(newData)
})
app.get('/staff', async (req,res)=>{
    let response= await fetch("https://hp-api.onrender.com/api/characters/staff")
    let data= await response.json()
    res.status(200).send(data)
})
app.get('/students', async (req,res)=>{
    let response= await fetch("https://hp-api.onrender.com/api/characters/students")
    let data= await response.json()
    res.status(200).send(data)
})
app.get('/spells', async (req,res)=>{
    let response= await fetch("https://hp-api.onrender.com/api/spells")
    let data= await response.json()
    res.status(200).send(data)
})

const myServer=http.createServer(app)
myServer.listen(port,()=>{
    console.log(`Server initialised on port ${port}...`)
})