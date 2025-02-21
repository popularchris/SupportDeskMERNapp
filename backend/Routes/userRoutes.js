const express=require('express')
const router=express.Router()
const {protect}=require('./middleware/authmidleware.js')
const {registerUser,loginUser,getMe}= require('../controller/usercotroller.js')
 router.post('/',registerUser)
 router.post('/login',loginUser)
 router.get('/me',protect,getMe)

 module.exports=router