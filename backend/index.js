const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit:"10mb"}))

const PORT =process.env.PORT || 8080
//Mongo DB connection
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

 const productSchema = mongoose.Schema({
  productname:{
    type : String,
    unique : true
  },
  category:String,
  image:String,
  price:Number,
  description:String
})
//model
const userModel= mongoose.model("user",userSchema)

const productModel= mongoose.model("product",productSchema)

//ROUTE API CALL
app.get("/",async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})
//SIGNUP
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

//LOGIN
app.post("/login",async(req,res)=>{
  const {email} = req.body
  console.log(req.body)
  userModel(res.body)
  const result = await userModel.findOne({email : email})
  if(result){
      if(result.pwd==req.body.pwd){
        const resData = {
          fname:result.fname,
          lname:result.lname,
          email:result.email,
          pwd:result.pwd,
          profilepic:result.profilepic
        }
        res.send({message : "Welcome",resData:resData})
      }else{
        res.send({message : "Wrong Email and Password"})
      }
  }else{
    res.send({message : "Something Went Wrong"})
  }
})
//ADD PRODUCT
app.post("/addproduct",async(req,res)=>{
  const {productname} = req.body
  console.log(req.body)
  /* userModel(res.body) */
  const result = await productModel.findOne({productname: productname})
  if(result){
      res.send({message : "Product already Exist"})
  }else{
      const data =new productModel({
          productname:req.body.productname,
          category:req.body.category,
          image:req.body.image,
          price:req.body.price,
          description:req.body.description
      })
      data.save().then(
          () => {
            res.status(201).json({
              message: 'Product Successfully Uploaded'
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
//Edit PRODUCT
app.post("/editproduct",async(req,res)=>{
  const {id} = req.body
  
  productModel.findOne({ _id: id }).then(product => {
    if (product) {
      // Update the properties of the product object
      product.productname = req.body.productname;
      product.category = req.body.category;
      product.image = req.body.image;
      product.price = req.body.price;
      product.description = req.body.description;
  
      // Save the updated product object
          product.save().then(async(updatedProduct) =>{
            const data = await productModel.find({})
            res.status(201).json({
              message: 'Product Successfully Updated',
              data:data
            });
          }).catch(err => {
            res.status(201).json({
              message: 'Product upload Failed'
            });
          });
        } else {
          res.status(201).json({
            message: 'Product upload Failed'
          });
        }
      }).catch(err => {
        res.status(201).json({
          message: 'Product upload Failed'
        });
      });
  
})
//Delete PRODUCT
app.post("/deleteproduct",async(req,res)=>{
  const id =new mongoose.Types.ObjectId(req.body.id)
  /* console.log(id) */
  productModel.findOneAndDelete({ _id: id }).then((err,doc) => {
      (async()=>{
        const data = await productModel.find({})
        res.status(201).json({
          message: 'Delete Product Successfully',
          data:data
        });
      })()
      }).catch(err => {
        res.status(201).json({
          message: 'Delete failed'
        });
      });
  
})

app.listen(PORT,()=>console.log("Server is running at port :" + PORT))