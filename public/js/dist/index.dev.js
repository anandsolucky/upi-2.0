"use strict";

var _require = require("express"),
    response = _require.response;

console.log('client js called');

var generateAccount = function generateAccount(userdata, callback) {
  fetch('http://localhost:3000/generateAccount', {
    method: "GET"
  }).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      callback(data);
    });
  });
};

var userForm = document.querySelector('form');
userForm.addEventListener('submit', function (e) {
  e.preventDefault();
  generateAccount("data", function (response) {
    console.log("final response rreceived: " + response);
  });
});