// @desc Gets all contacts
// @route GET /api/contacts
// @access PUBLIC

const getContacts=(req,res)=>{
    res.status(200).send({message:'Gets all contacts'});
};

// @desc Gets contact of given id
// @route GET /api/contacts/:id
// @access PUBLIC

const getContact=(req,res)=>{
    res.status(200).send({message:`Get contact of given ${req.params.id} `});
};

// @desc Create contact 
// @route POST /api/contacts/
// @access PUBLIC

const createContact=(req,res)=>{
    console.log('The Request Body is:',req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).send({message:`Create contact`});
};

// @desc Update contact of given id
// @route PUT /api/contacts/:id
// @access PUBLIC

const updateContact=(req,res)=>{
    res.status(200).send({message:`Update contact of given ${req.params.id} `});
};

// @desc Deletes contact og given id
// @route DELETE /api/contacts/:id
// @access PUBLIC

const deleteContact=(req,res)=>{
    res.status(200).send({message:`Deletes contact of given ${req.params.id} `});
};

module.exports={
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}