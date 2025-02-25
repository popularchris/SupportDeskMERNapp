
const asyncHandler = require('express-async-handler')
const User=require('../models/ticketModel')
const Tickets=require('../models/userModels')

const getTicket = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'get ticket'})
})
const createTicket = asyncHandler(async(req,res)=>{
    res.status(200).json({message:' create ticket'})
})
module.exports={
    createTicket,
    getTicket
}