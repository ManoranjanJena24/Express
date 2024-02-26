const express = require('express');
const router = express.Router();

            //admin/add-product =>GET
router.get('/add-product', (req, res, next) => {
    console.log("Middleware 1");
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button> </form>')

})

                //admin/add-product =>POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop') //we are redirect to shop becoz it is our bydefault page for now is http://localhost:3000/shop

})

module.exports = router;