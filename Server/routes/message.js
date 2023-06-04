const router=require('express').Router()
const Message = require('../models/Message')

router.post('/',async(request,response)=>{
    const message = new Message(request.body);
    try{
            const result = await message.save();
            return response.status(201).json({error:0,msg:"Message sent successfully"});
    }catch(err){
            return response.status(500).json({error:1,msg:"error ocured"});
    }
})

router.get('/:conersationId',async(request,response)=>{
    try{
            const result = await Message.find({"conversationId":request.params.conersationId});
            return response.status(200).json({error:0,data:result});
    }catch(err){
            return response.status(500).json({error:1,msg:"error ocured"});
    }
})

module.exports=router