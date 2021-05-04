var createError = require('http-errors');
var express = require('express');
var path = require('path');

//var bodyParser = require('body-parser');


var detailRouter = require('./routes/detail');

var app = express();

// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());

app.use('/detail', detailRouter);

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})





module.exports = app;
