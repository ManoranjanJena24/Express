const rootDir = require('../util/path')
const path = require('path')


exports.successMessage = (req, res, next) => {
    console.log("Middleware 2");
    res.sendFile(path.join(rootDir, 'views', 'success.html'))

}

exports.error404 = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pagenotfound.html'))
}