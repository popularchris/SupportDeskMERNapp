const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const {HandleErro}=require('/Users/oryema/MERN-app/backend/mddleware/erroMiddleware.js')
const PORT=process.env.PORT||8000
const connectDB=require('/Users/oryema/MERN-app/backend/consfig/db.js')
const colors=require('colors')
app.listen(PORT,()=>console.log(`server runnig on port ${PORT}`))
app.get('/',(req,res)=>{
    res.send(' register user')
})
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
 });
app.use('/api/users',require('/Users/oryema/MERN-app/backend/Routes/userRoutes.js'))