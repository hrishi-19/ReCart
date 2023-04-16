const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')

const app=express()

mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("connected to db")
})
.catch(err=>console.log(err))

app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/product',productRoute)

const PORT=process.env.PORT||5500
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)

})