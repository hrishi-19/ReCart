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
        res.status(201).json({error:0,msg:"user registered successfully"})
    }
    catch(err){
        if(err.code===11000){
            return res.status(409).json({error:1,error_msg:"username/Email already exists"})
        }
        res.status(500).json({error:1,error_msg:"Some error occured"})
    }

}
module.exports = register