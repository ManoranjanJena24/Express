const rootDir = require('../util/path')
const path = require('path')
const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Middleware 2");
   res.sendFile(path.join(rootDir,'views','shop.html'))

})

module.exports = router;