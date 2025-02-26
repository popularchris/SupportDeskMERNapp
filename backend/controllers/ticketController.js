
const asyncHandler = require('express-async-handler')
const User=require('../models/ticketModel')
const Ticket=require('../models/userModels')
  
  const getTicket = asyncHandler(async (req, res) => {
    const user= await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
    const ticket= await Ticket.find({user:req.user.id})
    res.status(200).json(ticket)
  })
  
  const createTicket = asyncHandler(async (req, res) => {
    const {product,description}=req.body
    if(!product||!description){
      res.status(400)
      throw new Error('please add product and description')
    }
    const user= await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
        const ticket= await Ticket.create({
            product,
            description,
            status:'new',
            user:req.user.id
        })

        res.status(201).json(ticket)
    
  })

module.exports= {
    createTicket,
    getTicket,
}
