"use strict";

var express = require('express');

var app = require('./routes/router');

var path = require('path');

var hbs = require('hbs');

var bodyParser = require('body-parser');

var _require = require('body-parser'),
    json = _require.json;

var mongoose = require('mongoose');

var port = process.env.PORT || 3000;
var publicPath = path.join(__dirname, '../public');
var viewsPath = path.join(__dirname, '../templates/views');
var partialsPath = path.join(__dirname, '../templates/partials');
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
app.use(express["static"](publicPath));
app.use(bodyParser.json());
mongoose.connect('mongodb://max:G0tqCEpDmZpYjjoj@cluster0-shard-00-00.v3zte.mongodb.net:27017,cluster0-shard-00-01.v3zte.mongodb.net:27017,cluster0-shard-00-02.v3zte.mongodb.net:27017/UPI-DB?ssl=true&replicaSet=atlas-j031z0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('connected to database');
})["catch"](function (err) {
  console.log('connection failed' + err);
});
app.listen(port, function () {
  console.log('server is running on port ' + port);
});