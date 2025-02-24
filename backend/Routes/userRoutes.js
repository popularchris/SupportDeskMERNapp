const express=require('express')
const router=express.Router()
// midelware/authmiddlewa
// const {protect}=require('../middleware/authMidleware.js')
const {registerUser,loginUser,getMe}= require('../controllers/usercotroller.js')
 router.post('/',registerUser)
 router.post('/login',loginUser)
 router.get('/me',getMe)

 module.exports=router