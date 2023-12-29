const mongoose = require('mongoose');

const contactSchema=mongoose.Schema({
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
    }
},{
    timestamps:true
});

module.exports=mongoose.model("Contact",contactSchema);