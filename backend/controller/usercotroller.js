
const asyncHandler = require('express-async-handler')
const bcrypt=require('bcryptjs')
const User =require('/Users/oryema/MERN-app/backend/models/userModels.js')
const jwt=require('jsonwebtoken')
const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    if(!name ||!email ||!password){
        res.status(400)
        throw new Error('pleasea fill in all the fileds')
    }
    const UserExists= await User.findOne({email})
    if(UserExists){
        res.status(400)
        throw new Error('User already exists')
    }
    const salt= await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)    
    const user = await User.create({
       name,
       email,
       password:hashedPassword
    })
    if(user){
          res.status(201).json({
              _id:user._id,
              name:user.name,
              email:user.email,
              token:generateToken(user._id)
          })
      }else{
          throw new Error('Invalid user creaadentilas')
      }  
})
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
      if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)

        })
    }
        else{
            res.status(401)
            throw new Error('Invalid creadentials')
        }

      }
    
)
const getMe = asyncHandler(async(req,res)=>{
     const user= {
        id:req.user._id,
        email:req.user.email,
        name:req.user.name
     }
    
    res.status(200).json(user)
})
 const generateToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRETE,{
        expiresIn:'30d',
    })
}

module.exports={
    registerUser,
    loginUser,
    getMe
}