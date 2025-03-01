const express=require('express')
const router=express.Router()
const {protect}=require('../middleware/authMidleware.js')
const {createTickets,getTickets,getTicket,updateTicket,deleteTicket}= require('../controllers/ticketController.js')
const noteRouter =require('./noteRoute')
router.use('ticketId/notes',noteRouter)
 
 router.route('/').get(protect,getTickets).post(protect,createTickets)
 router.route('/:id').get(protect,getTicket).delete(protect,deleteTicket).put(protect,updateTicket)
 

 module.exports=router