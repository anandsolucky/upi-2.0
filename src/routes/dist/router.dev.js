"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var _require = require('body-parser'),
    json = _require.json;

var mongoose = require('mongoose');

var userModel = require('../../models/users');

var generateAccountNumber = require('../utils/generateAccountNumber');

var searchUserData = require('../utils/searchUserData');

var chalk = require('chalk');

var app = express();
app.use(bodyParser.json());
app.get('', function (req, res) {
  res.render('index', {
    name: 'Anand Solanki'
  });
});
app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/search', function (req, res) {
  res.render('search');
});
app.post('/generateAccount', function (req, res) {
  var params = req.body;
  console.log("params: " + params);
  generateAccountNumber(params, function _callee(error, userData) {
    var user;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = new userModel(userData);
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(user.save());

          case 4:
            console.log(chalk.bgGreen('entry successfully added'));
            console.log(chalk.green(user));
            res.json({
              msg: "data inserted successfully"
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            res.json({
              error: "error"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  });
});
app.get('/searchRecords', function (req, res) {
  var accountNum = req.query.ac;
  searchUserData(accountNum, function (error, response) {
    if (error) res.json({
      msg: 'error in data fetch'
    });else res.json(response);
  });
});
module.exports = app;