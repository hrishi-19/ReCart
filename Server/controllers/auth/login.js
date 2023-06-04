const User = require("../../models/User");
const crypto=require('crypto-js')
const JWT=require('jsonwebtoken')

const login=async(req,res)=>{
    try{
        const user=await User.findOne({userName:req.body.userName})
        !user&&res.status(401).json({msg:"wrong Credentials"})
        const hashpasswd=crypto.AES.decrypt(user.password,process.env.ENCRYPT_KEY)
        const paswrd=hashpasswd.toString(crypto.enc.Utf8)
       
        paswrd!==req.body.password && res.status(401).json("wrong credentials")
        const accessToken=JWT.sign({
            user:user,
        },process.env.JWT_TOKEN,{expiresIn:"3h"})
        const{password,...userData}=user._doc
        res.status(200)
        .cookie(`token`,accessToken,
        {maxAge:24*60*60*1000,httponly:true})
        .json({...userData})


    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}
module.exports=login