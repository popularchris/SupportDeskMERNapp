const express=require('express')
const router=express.Router()
const {getTickets,createTicket}=require('../controllers/ticketController')
const { protect } = require('../middleware/authmidleware')


module.exports=router