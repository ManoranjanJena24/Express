// const http =require('http')
const express = require('express')
const app = express()


app.use((req, res, next) => {
    console.log("Middleware 1");
    next();//Allow the request to continue to next middleware in line

})
app.use((req, res, next) => {
    console.log("Middleware 2");
    res.send('<h1>Hello World</h1>')

})

// app.get('/', function (req, res) {
//     res.send('Hello World')
// // })
// const server = http.createServer(app)
app.listen(3000)