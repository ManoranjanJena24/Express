const express = require('express')
const app = express()
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/add-product', (req, res, next) => {
    console.log("Middleware 1");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button> </form>')

})
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')



})


app.use('/', (req, res, next) => {
    console.log("Middleware 2");
    res.send('<h1>Hello World</h1>')

})


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/")
})