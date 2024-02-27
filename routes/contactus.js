const rootDir = require('../util/path')
const path = require('path')
const express = require('express');
const router = express.Router();

//admin/add-product =>GET
router.get('/contact-us', (req, res, next) => {
    console.log("Middleware 1");
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))

})

//admin/add-product =>POST
router.post('/contact-us', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success')
})

module.exports = router;