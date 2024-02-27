const express = require('express')
const router = express.Router();
const messageController=require('../controllers/messages')

router.post('/success', messageController.successMessage )

module.exports = router;