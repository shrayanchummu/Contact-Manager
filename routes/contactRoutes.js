const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).send({message:"All contacts"});
});

module.exports=router;
