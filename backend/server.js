const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT||8000
const connectDB=require('./consfig/db.js')
const colors=require('colors')
const { errorHandler }=require('./middleware/errorMiddleware')
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/users',require('./routes/userRoutes.js'))
app.use('/api/users',require('./routes/ticketRoutes.js'))
app.use(errorHandler)
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))