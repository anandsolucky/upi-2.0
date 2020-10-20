"use strict";

// user : max
// password: eMBIDWv1h7BR63vd
// db: UPI-DB
// mongodb+srv://max:eMBIDWv1h7BR63vd@cluster0.v3zte.mongodb.net/UPI-DB?retryWrites=true&w=majority
var chalk = require('chalk');

var mongoose = require('mongoose');

var userModel = require('../../models/users');

var generateAccountNumber = function generateAccountNumber(userdata, callback) {
  var msg = "generate account number called";
  var accountNum = Math.floor(100000 + Math.random() * 900000);
  var unique = false;

  while (unique) {
    unique = isUnique(accountNum, function (error, response) {
      if (error) console.log(chalk.bgRed('is unique function failed!!!!!!'));else return response;
    });
  }

  var data = {
    name: userdata.name,
    username: userdata.username,
    password: userdata.password,
    accountNumber: accountNum
  };
  callback(undefined, data);
};

var isUnique = function isUnique(num, callback) {
  userModel.find({
    accountNumber: num
  }, function (err, docs) {
    if (err) {
      console.log(chalk.bgRed("account number does not exists, = " + err));
      callback(err, undefined);
    } else {
      if (docs == "") callback(undefined, true);else callback(undefined, false);
    }
  });
};

module.exports = generateAccountNumber;