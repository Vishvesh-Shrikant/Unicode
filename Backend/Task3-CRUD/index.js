const express= require("express")
const mongoose= require("mongoose")

const app=express()
const port=3000

//connecting db
const connectDB=async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Hogwarts")
        console.log('DB connected to node')
    }
    catch(err){
        console.log("Mongo error: ",err)
    }
}
connectDB()

//implementing database 
const studentSchema=new mongoose.Schema({
    id:{
        type:"string",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    house:{
        type:String,
        required:true
    },
    wizard:{
        type: Boolean,
        required:true
    }
})
const Student=mongoose.model('Students',studentSchema)

app.use(express.urlencoded({ extended:false}))


app.get("/", (req, res)=>{
    res.send("Welcome to Hogwarts")
})

//getting data to store in the db
app.post('/students', async (req, res)=>{
    const body= req.body
    const house=["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    if(!body || !body.id || !body.name || !body.gender ||!body.wizard)
    {
        //message to show there was a client error
        return res.status(400).json({msg:"All fiels are required"})
    }
    await Student.create({
        id:body.id,
        name:body.name,
        gender:body.gender,
        house:house[Math.floor(Math.random()*house.length)],
        wizard:body.wizard
    })
    //message to show data was added 
    return res.status(201).json({msg: "item created"})
})

//displaying data stored in the db 
app.get('/students', async(req, res)=>{
    const student= await Student.find({})
    res.status(200).send(student)
})


app.listen(port,()=>{
    console.log(`Server initialised on port ${port}...`)
})