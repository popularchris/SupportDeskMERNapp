const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')

const User=require('/Users/oryema/MERN-app/backend/models/userModels.js')

const protect =asyncHandler(async(req,res,next)=>{

    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
  try {
    token=req.headers.authorization.split(' ')[1]
    const decoded=jwt.verify(token,process.env.JWT_SECRETE)
       console.log(decoded)
    req.user=await User.findById(decoded.id).select('-password')
    next()
  } catch (error) {
    console.log(error)

    res.status(401)
    throw new Error('An authorized acces')
    
  }
}
if(!token){
      res.status(401)
    throw new Error('not authorized acces')
}
}
)
module.exports={protect}
