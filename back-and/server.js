const express =require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json)
const cors=require("cors")
app.use(cors())
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const Schema=mongoose.Schema
const PORT=process.env.PORT

mongoose.connect(process.env.CONNECT_PASSWORD)
.then(()=>console.log('connectd!'));

const ProductSchema=new Schema({
    title: String,
    img: String,
    discraption: String
})
const MyProductModel=mongoose.model('productModel',productModel);
app.get("/api",(req,res)=>{
    res.send("welcome")
})
app.get("/api/product",async(req,res)=>{
    let myProduct=await MyProductModel.find({})
    res.send({
        message:"succes GetAll",
        data: myProduct
    })
})

app.post ("/api/product",async(req,res)=>{
    let newProduct.save()
    res.send({
        message:"success post",
        data: req.body
    })
})

app.delete("api/product/:id", async(req,res)=>{
    let {id}=req.params
    let deletedProduct=await MyProductModel.findByIdAndDelete(id)
    res.send({
        message:"success delete",
        data: deletedProduct
    })
})
app.listen(PORT,()=>{
    console.log(`Salam ${PORT}`)
})