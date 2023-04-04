const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        userName:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        phone:{type:Number,required:true,
        validate:{
            validator:v=>v.toString().length===10,
            message:'phone must be 10 digit number'
        }
        },
},{
    timestamps:true
})

module.exports=mongoose.model('User',userSchema)