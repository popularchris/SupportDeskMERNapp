 
 const Ticket=require('../models/ticketModel')
 const User=require('../models/userModels')
 const Note=require('../models/noteModels')
 const asyncHandler = require('express-async-handler')
 
 const getNotes = asyncHandler(async (req, res) => {
    const user= await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
    const ticket= await Ticket.find(req.params.ticketid)
    if(ticket.user.toString()!==req.user.id){
        res.status(401)
        throw new Erroer('not authorized')
    }
    const Notes=await Note.find({ticket:req.params.ticketid})
    res.status(200).json(Notes)
  })
  const createNote = asyncHandler(async (req, res) => {
    const user= await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
    const note= await  Note.create({
        text:req.body,
        isStaff:false,
        user:req.user.id,
        ticket:req.params.ticketid})
    const Notes=await Note.find({ticket:req.params.ticketid})
    res.status(200).json(note)
  })

  module.exports={
    getNotes,
    createNote
  }