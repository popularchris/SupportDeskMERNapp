const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const {errorHandler}=require('/Users/oryema/Desktop/mernapp2/backend/middleware/erroMiddleware.js')
const PORT=process.env.PORT||8000
const connectDB=require('/Users/oryema/Desktop/mernapp2/backend/consfig/db.js')
const colors=require('colors')
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
app.get('/',(req,res)=>{
    res.send(' register user')
})
connectDB()
app.use(errorHandler)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
 });
app.use('/api/users',require('/Users/oryema/Desktop/mernapp2/backend/Routes/userRoutes.js'))