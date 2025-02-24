const mongoose=require('mongoose')

const ticketSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'Please enter a name'],
        ref:'User'
    },
     product:{
        type:String,
        required:[true,'Please add a product'],
        enum:['Iphone','ipad','imac','Macbook']
    },
    description:{
        type:String,
        required:[true,'Please add password']
    },
    status:{
        type:String,
        required:true,
        enum:['new','open','closed'],
        default:'new'
    }
},
{
    timestamps:true,
}
)
module.exports=mongoose.model('Tickets',ticketSchema)