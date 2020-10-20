const chalk = require('chalk');
const mongoose = require('mongoose');   
const userModel = require('../../models/users');

const searchUserData = (accountNum, callback) => {
    console.log("account num: " + chalk.bgBlue(accountNum));
    userModel.find({accountNumber: accountNum}, function(error, doc)  {
        if(error) {
            callback({status: "error", error: error},undefined);
        }
        else {
            if(doc == "")  {
                callback(undefined, {status: "not found"});   
            } else {
                const data = {
                    name: doc[0].name,
                    username: doc[0].username,
                    accountNumber: doc[0].accountNumber
                }
                callback(undefined, {status: "found", data});
            }
            
        }
    })
}

module.exports = searchUserData;