const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
<<<<<<< Updated upstream
const {errorHandler}=require('./middleware/authmidleware.js')
const PORT=process.env.PORT||8000
const connectDB=require('./consfig/db.js')
const colors=require('colors')
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
app.get('/',(req,res)=>{
    res.send(' register user')
})
=======
const PORT=process.env.PORT || 8000
const { errorHandler }=require('./middleware/errorMiddleware')
const connectDB=require('./config/db.js')
>>>>>>> Stashed changes
connectDB()
app.use(errorHandler)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
<<<<<<< Updated upstream
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
 });
app.use('/api/users',require('./Routes/userRoutes.js'))
=======
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/tickets',require('./routes/ticketRoutes'))
app.use(errorHandler)
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
//server js files changed
>>>>>>> Stashed changes
