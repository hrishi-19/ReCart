const express=require('express')
const mongoose=require('mongoose')
const cookieParser = require('cookie-parser')
const cors=require('cors')
require('dotenv').config()
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const conversationRoute=require('./routes/conversation')
const messageRoute = require('./routes/message')
const app=express()
const bodyParser = require('body-parser');


mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser())

app.use('/api/auth',authRoute)
app.use('/api/product',productRoute)
app.use('/api/conversation',conversationRoute)
app.use('/api/message',messageRoute)
const PORT=process.env.PORT||5500
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)

})