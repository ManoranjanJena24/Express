const rootDir = require('../util/path')
const path = require('path')
const express = require('express')
const router = express.Router();

router.post('/success', (req, res, next) => {
    console.log("Middleware 2");
    res.sendFile(path.join(rootDir, 'views', 'success.html'))

})

module.exports = router;