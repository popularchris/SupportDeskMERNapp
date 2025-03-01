const express=require('express')
const router=express.Router({mergeParams:true})
const {protect}=require('../middleware/authMidleware')
const{getNotes,createNote}=require('../controllers/noteController')

router.route('/').get(protect,getNotes).post(protect,createNote)
module.exports=router