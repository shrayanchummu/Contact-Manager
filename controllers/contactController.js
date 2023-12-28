const asyncHandler=require('express-async-handler');
// used instead of try catch statements in async blocks

// @desc Gets all contacts
// @route GET /api/contacts
// @access PUBLIC

const getContacts=asyncHandler(async(req,res)=>{
    res.status(200).send({message:'Gets all contacts'});
});

// @desc Gets contact of given id
// @route GET /api/contacts/:id
// @access PUBLIC

const getContact=asyncHandler(async(req,res)=>{
    res.status(200).send({message:`Get contact of given ${req.params.id} `});
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
    res.status(201).send({message:`Create contact`});
});

// @desc Update contact of given id
// @route PUT /api/contacts/:id
// @access PUBLIC

const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).send({message:`Update contact of given ${req.params.id} `});
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