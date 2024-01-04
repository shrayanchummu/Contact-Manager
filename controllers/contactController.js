const {ObjectId} = require('mongoose').Types;
const asyncHandler=require('express-async-handler');
// used instead of try catch statements in async blocks
const Contact=require('../models/contactModel');

// @desc Gets all contacts
// @route GET /api/contacts
// @access PRIVATE

const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find({
        $or: [
            { user_id: req.user._id },
            { sharedWith: { $in: [req.user._id] } }
        ]
    });
    res.status(200).send(contacts);
});

// @desc Gets contact of given id
// @route GET /api/contacts/:id
// @access PRIVATE

const getContact=asyncHandler(async(req,res)=>{
    // console.log('Contact ID from params:', req.params.id);

    const contactId = new ObjectId(req.params.id);
    // console.log('Contact ID:', contactId);
    // console.log('User ID:', req.user._id);
    
    const oldContact=await Contact.findOne({
        $or: [
            { _id: contactId, user_id: req.user._id },
            { _id: contactId,sharedWith: { $in: [req.user._id] } }
        ]
    });
    // console.log('Query Result:', oldContact);

    if(!oldContact){
        res.status(404);
        throw new Error("Contact not found");
    }
    
    res.status(200).send(oldContact);
});

// @desc Create contact 
// @route POST /api/contacts/
// @access PRIVATE

const createContact=asyncHandler(async(req,res)=>{
    console.log('The Request Body is:',req.body);
    const {name,email,phone,sharedWith}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const newContact=await Contact.create({
        user_id:req.user._id,
        name,
        email,
        phone,
        sharedWith: sharedWith || [],
    });

    res.status(201).send(newContact);
});

// @desc Update contact of given id
// @route PUT /api/contacts/:id
// @access PRIVATE

const updateContact=asyncHandler(async(req,res)=>{
    const oldContact=await Contact.findById(req.params.id);
    if(!oldContact){
        res.status(404);
        throw new Error("Contact with the given ID is not found");
    }
    if(oldContact.user_id.toString()!==req.user._id){
        res.status(403);
        throw new Error("User doesn't have permission to update other User's Contacts")
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
// @access PRIVATE

const deleteContact=asyncHandler(async(req,res)=>{
    const oldContact=await Contact.findById(req.params.id);
    if(!oldContact){
        res.status(404);
        throw new Error("Contact with the given ID is not found");
    }
    if(oldContact.user_id.toString()!==req.user._id){
        res.status(403);
        throw new Error("User doesn't have permission to delete other User's Contacts")
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).send(oldContact);
});

const shareContact=asyncHandler(async(req,res)=>{
    const currentUserId=req.user._id;

    const oldContact=await Contact.findById(req.params.id);

    if(!oldContact){
        res.status(404);
        throw new Error("Contact with the given ID is not found");
    }
    if(oldContact.user_id.toString()!==currentUserId){
        res.status(403);
        throw new Error("User doesn't have permission to share this Contact other User's Contacts")
    }

    const {targetUserId}=req.body;

    if(oldContact.sharedWith.includes(targetUserId)){
        res.status(400);
        throw new Error('Contact is already shared with the target user');
    }

    oldContact.sharedWith.push(targetUserId);
    await oldContact.save();

    res.status(200).send({message:"Contact Shared succesfully"});


});

module.exports={
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
    shareContact
}