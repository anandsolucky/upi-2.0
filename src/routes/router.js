const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const mongoose = require('mongoose');

const userModel = require('../../models/users');
const generateAccountNumber = require('../utils/generateAccountNumber');
const searchUserData = require('../utils/searchUserData');
const chalk = require('chalk');

const app = express();

app.use(bodyParser.json());

app.get('',(req, res) => {
    res.render('index', { name: 'Anand Solanki'})
});

app.get('/about', (req, res) => {
    res.render('about');    
})

app.get('/search', (req, res) => {
    res.render('search');    
})

app.post('/generateAccount',  (req, res) => {
    const params = req.body;
    
    console.log("params: " + params);
    generateAccountNumber(params, async (error,userData) => {
        const user = new userModel(userData);
        try {
            await user.save(); 
            console.log(chalk.bgGreen('entry successfully added')); 
            console.log(chalk.green(user));
            res.json({msg: "data inserted successfully"});  
        } catch (error) {
            res.json({error:"error"});
        }
        
    })
  
})

app.get('/searchRecords', (req, res) => {
    const accountNum = req.query.ac;
    searchUserData(accountNum, (error, response) => {
        if(error) res.json({msg: 'error in data fetch'});
        else res.json(response);
    })
})

module.exports = app;
