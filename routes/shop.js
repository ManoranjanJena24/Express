const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Middleware 2");
    res.send('<h1>Hello World</h1>')

})

module.exports = router;