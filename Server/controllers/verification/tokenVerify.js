const JWT=require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{

    const user_token=req.cookies.token
    if(!user_token){
        return res.status(401).json({msg:"Not authenticated"})
    }
    try{
        const user=await JWT.verify(user_token,process.env.JWT_TOKEN) 
        req.user={...user.user}
        next()

    }catch(err){
            res.status(401).json({msg:"Token expired"})
    }
    
}
module.exports={verifyToken}