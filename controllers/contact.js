const rootDir = require('../util/path')
const path = require('path')

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success')
}


exports.getContact =(req, res, next) => {
    console.log("Middleware 1");
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))

}