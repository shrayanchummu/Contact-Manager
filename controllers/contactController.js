const asyncHandler=require('express-async-handler');
// used instead of try catch statements in async blocks
const Contact=require('../models/contactModel');

// @desc Gets all contacts
// @route GET /api/contacts
// @access PUBLIC

const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find();
    res.status(200).send(contacts);
});

// @desc Gets contact of given id
// @route GET /api/contacts/:id
// @access PUBLIC

const getContact=asyncHandler(async(req,res)=>{
    const oldContact=await Contact.findById(req.params.id);
    if(!oldContact){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).send(oldContact);
});

// @desc Create contact 
// @route POST /api/contacts/
// @access PUBLIC

const createContact=asyncHandler(async(req,res,next)=>{
    console.log('The Request Body is:',req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        const error=new Error("All fields are mandatory");
        return next(error);
    }
    const newContact=await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).send(newContact);
});

// @desc Update contact of given id
// @route PUT /api/contacts/:id
// @access PUBLIC

const updateContact=asyncHandler(async(req,res)=>{
    const oldContact=await Contact.findById(req.params.id);
    if(!oldContact){
        res.send(404);
        throw new Error("Contact with the given ID is not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).send(updatedContact);
});

// @desc Deletes contact og given id
// @route DELETE /api/contacts/:id
// @access PUBLIC

const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).send({message:`Deletes contact of given ${req.params.id} `});
});

module.exports={
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}