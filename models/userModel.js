const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter UserName"],
        unique:[true,"UserName already exist"]
    },
    email:{
        type:String,
        required:[true,"Please enter User Email"],
        unique:[true,"Email Address already exist"]
    },
    password:{
        type:String,
        required:[true,"Please enter Password"]
    }
},{
    timestamps:true
});

module.exports=mongoose.model("User",userSchema);