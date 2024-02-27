const rootDir = require('../util/path')
const path = require('path')
exports.getAddProduct = (req, res, next) => {
    console.log("Middleware 1");
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))

}


exports.postAddProduct = (req, res, next) => {
    console.log("inside Add Product")
    console.log(req.body);
    res.redirect('/')
}

exports.getAllProducts = (req, res, next) => {
    console.log("Middleware 2");
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))

}



