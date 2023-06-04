const router=require('express').Router();
const Conversation = require('../models/Conversation');

router.post('/',async (request,response)=>{
    const newConversation  = new Conversation({
        members:[request.body.senderId, request.body.recieverId]
    })
    try{
        const result = await newConversation.save();
        return response.status(201).json({error:0, msg: "conversation created"});
    }
    catch(err){
        return response.status(500).json({error:1,msg:"error occured"});
    }
})

router.get('/:conversationId',async (request,response)=>{
    try{
        const result = await Conversation.findById(request.params.conversationId);
        return response.status(200).json({error:0, data:result});
    }
    catch(err){
        console.log(err)
        return response.status(500).json({error:1,msg:"error occured"});
    }
})

module.exports=router