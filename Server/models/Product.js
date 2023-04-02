const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{type:String,required:true},
    desc:{type:String,required:true},
    type:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    img:{type:String,required:true},
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


})
module.exports=mongoose.model("Product",productSchema)