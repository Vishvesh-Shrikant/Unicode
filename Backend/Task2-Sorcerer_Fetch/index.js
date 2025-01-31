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
    if(newData.length===0)
        return res.status(404).send("NO DATA FOUND")
    else
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

app.listen(port,()=>{
    console.log(`Server initialised on port ${port}...`)
})