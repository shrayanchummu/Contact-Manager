const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const User=require('../models/userModel')

// @desc Registers Users
// @route POST /api/user/register
// @access PUBLIC
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("User already Registered");
    }
    const hashedPassword= await bcrypt.hash(password,10);
    // console.log("password:",password);
    // console.log("hashedPassword:",hashedPassword);

    const newUser= await User.create({
        username,
        email,
        password:hashedPassword
    });
    console.log("New user created SUCCESSFULLY ");
    if(newUser){
        res.status(201).send({_id:newUser._id,email:newUser.email});
    }
    else{
        res.status(400);
        throw new Error("User data is INVALID")
    }
});

// @desc Login User Info
// @route POST /api/user/login
// @access PUBLIC
const loginUser=asyncHandler(async(req,res)=>{
    res.status(200).send({message:"Register the User"});
});

// @desc Gets Current User
// @route GET /api/user/register
// @access PRIVATE
const currentUser=asyncHandler(async(req,res)=>{
    res.status(200).send({message:"Register the User"});
});

module.exports={
    registerUser,
    loginUser,
    currentUser
}