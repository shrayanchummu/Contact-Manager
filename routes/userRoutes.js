const express=require('express');

const router=express.Router();

router.post('/register',(req,res)=>{
    res.send({message:"Register the User"});
});
router.post('login',(req,res)=>{
    res.send({message:"Login User"})
});
router.get('currentUser',(req,res)=>{
    res.send({message:"Gets the informtaion of Current User"})
});

module.exports=router;