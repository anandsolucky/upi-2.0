const express = require('express');
const app = require('./routes/router');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
var publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('views',viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));
app.use(bodyParser.json());

mongoose.connect('mongodb://max:G0tqCEpDmZpYjjoj@cluster0-shard-00-00.v3zte.mongodb.net:27017,cluster0-shard-00-01.v3zte.mongodb.net:27017,cluster0-shard-00-02.v3zte.mongodb.net:27017/UPI-DB?ssl=true&replicaSet=atlas-j031z0-shard-0&authSource=admin&retryWrites=true&w=majority',
                {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>{ console.log('connected to database'); })
  .catch((err) =>{ console.log('connection failed' + err); });

app.listen(port, ()=> {
    console.log('server is running on port '+port);
})