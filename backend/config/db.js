const mongoose=require('mongoose')
const connectDB=async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo Db connected ${conn.connection.host}`.cyan.underline)
        
    } catch (error) {
        console.log(`Error:${error.message}`.red .bold .underline)
        process.exit(1)
    }
}
module.exports=connectDB