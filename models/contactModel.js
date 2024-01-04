const mongoose = require('mongoose');

const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true,"Please enter Contact Name"]
    },
    email:{
        type:String,
        required:[true,"Please enter Contact Email"]
    },
    phone:{
        type:String,
        required:[true,"Please enter Contact Phone Number"]
    },
    sharedWith:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
},{
    timestamps:true
});

module.exports=mongoose.model("Contact",contactSchema);