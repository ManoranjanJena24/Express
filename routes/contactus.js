const express = require('express');
const router = express.Router();
const contactController=require('../controllers/contact')

//admin/add-product =>GET
router.get('/contact-us', contactController.getContact)

//admin/add-product =>POST
router.post('/contact-us', contactController.postContact )

module.exports = router;