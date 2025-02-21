const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')

const User=require('/Users/oryema/Desktop/mernapp2/backend/models/userModels.js')
const protect =asyncHandler(async(req,res,next)=>{

    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
  try {
    token=req.headers.authorization.split(' ')[1]
    const decoded=jwt.verify(token,process.env.JWT_SECRETE)
    req.user=await User.findById(decoded.id).select('-password')
    next()
  } catch (error) {
    console.log(error)

    res.status(401)
    throw new Error('An authorized access')
  }
}
if(!token){
      res.status(401)
    throw new Error('not authorized access')
}
}
)
module.exports={protect}
