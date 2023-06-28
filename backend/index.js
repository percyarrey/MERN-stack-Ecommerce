const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit:"10mb"}))

const PORT =process.env.PORT || 8080
//Mongo DB connection
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("connected to Database"))
    .catch((e)=>console.log(e))

//schema
 const userSchema = mongoose.Schema({
      fname:String,
      lname:String,
      email:{
        type : String,
        unique : true
      },
      pwd:String,
      profilepic:String
 })
//model
const userModel= mongoose.model("user",userSchema)

//api
app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.post("/signup",async(req,res)=>{
    const {email} = req.body
    console.log(req.body)
    userModel(res.body)
    const result = await userModel.findOne({email : email})
    if(result){
        res.send({message : "Email already Exist"})
    }else{
        const data =new userModel({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            pwd:req.body.pwd,
            profilepic:req.body.profilepic
        })
        data.save().then(
            () => {
              res.status(201).json({
                message: 'Successfully sign Up!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
    }
})

app.listen(PORT,()=>console.log("Server is running at port :" + PORT))