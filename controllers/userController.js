const asyncHandler=require('express-async-handler');

// @desc Registers Users
// @route POST /api/user/register
// @access PUBLIC
const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).send({message:"Register the User"});
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