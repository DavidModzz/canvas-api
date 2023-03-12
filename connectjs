var express = require('express')
var cors = require('cors')
var morgan = require('morgan');
var secure = require('ssl-express-www')

const PORT = 3000

var mainrouter = require('./apis')

var app = express()
app.enable('trust proxy');
app.use(morgan('dev'));
app.set("json spaces",2)
app.use(cors())
app.use(secure)

app.use('/', mainrouter)

app.listen(PORT, () => {
    console.log("server listening on https://yourdomain:" + PORT)
})

module.exports = app
