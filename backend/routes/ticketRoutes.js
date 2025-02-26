const express=require('express')
const router=express.Router()
const {protect}=require('../middleware/authMidleware.js')
const {createTicket,getTicket}= require('../controllers/ticketController.js')
 router.route('/').get(protect,getTicket).post(protect,createTicket)
 

 module.exports=router