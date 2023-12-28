const express=require('express');
const {getContacts,getContact,createContact,updateContact,deleteContact}=require('../controllers/contactController')
const router=express.Router();

router.get('/',getContacts);

router.get('/:id',getContact);

router.post('/',createContact);

router.put('/:id',updateContact);

router.delete('/:id',deleteContact);

module.exports=router;
