const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const contactRoutes = require("./routes/contactus")
const successRoutes = require("./routes/success")


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(shopRoutes);
app.use(adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'))
})


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/")
})

