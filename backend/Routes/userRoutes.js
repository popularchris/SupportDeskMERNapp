const express=require('express')
const router=express.Router()
const {protect}=require('/Users/oryema/MERN-app/backend/mddleware/authmidleware.js')
const {registerUser,loginUser,getMe}= require('../controller/usercotroller.js')
 router.post('/',registerUser)
 router.post('/login',loginUser)
 router.get('/me',protect,getMe)

 module.exports=router