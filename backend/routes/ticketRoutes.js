const express=require('express')
const router=express.Router()
const {getTickets,createTicket}=require('../controllers/ticketController')
const { protect } = require('../middleware/authMidleware')


module.exports=router