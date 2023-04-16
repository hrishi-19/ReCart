const User = require("../../models/User");
const crypto=require('crypto-js')

const register=async(req,res)=>{
    
    const {firstName,lastName,userName,email,phone}=req.body
    const user=new User({
        firstName,
        lastName,
        userName,
        email,
        password:crypto.AES.encrypt(req.body.password,process.env.ENCRYPT_KEY).toString(),
        phone
    })

    try{
        const result=await user.save()
        const{password,...userData}=result._doc
        res.status(201).json(userData)
    }
    catch(err){
        console.log(err.message)
        res.status(500).json(err.message)
    }

}
module.exports=register