const HandleErros=(res,req,erro,next)=>{
const statusCode=res.statusCode?res.statusCode:500
res.status(statusCode)
res.json({
    message:erro.message,
    stack:process.env.NODE_ENV ==='production'?null:erro.stack
})
}
module.exports=HandleErros