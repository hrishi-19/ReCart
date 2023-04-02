const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const authRoute=require('./routes/auth')

const app=express()
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err))
app.use(express.json())

app.use('/auth',authRoute)

const PORT=process.env.PORT||5500
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)

})