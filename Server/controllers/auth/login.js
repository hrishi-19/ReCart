const User = require("../../models/User");
const crypto=require('crypto-js')
const JWT=require('jsonwebtoken')

const login=async(req,res)=>{
    console.log(req.body)
    try{
        const user=await User.findOne({userName:req.body.userName})
        console.log(user)
        !user&&res.status(401).json({msg:"wrong Credentials"})
        const hashpasswd=crypto.AES.decrypt(user.password,process.env.ENCRYPT_KEY)
        const paswrd=hashpasswd.toString(crypto.enc.Utf8)
        console.log(user.password)
       
        paswrd!==req.body.password && res.status(401).json("wrong credentials")
        const accessToken=JWT.sign({
            id:user.id,
        },process.env.JWT_TOKEN,{expiresIn:"1 d"})
        const{password,...userData}=user._doc
        res.status(200).json({...userData,accessToken})


    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}
module.exports=login