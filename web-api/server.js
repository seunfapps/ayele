const express = require('express')
//const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require("./config.json")
const setApplicationRoutes = require("./routes/routes");

let app = express()

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD');
    res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token');
    if ('OPTIONS' === req.method) {
      res.send(200); //respond with 200
    }
    else {
      next(); //move on
    }
}
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let router = express.Router();
router = setApplicationRoutes(router);

app.use('/', router);

// Start the server
app.listen(process.env.PORT || 40404);