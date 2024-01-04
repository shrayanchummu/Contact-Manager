const express=require('express');
const {getContacts,getContact,createContact,updateContact,deleteContact,shareContact}=require('../controllers/contactController');
const validateToken = require('../middleware/validTokenHandler');
const router=express.Router();

router.use(validateToken);
// everything becomes PRIVATE
router.route('/').get(getContacts);

router.route('/:id').get(getContact);

router.route('/').post(createContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

router.route('/:id/share').post(shareContact);

module.exports=router;
