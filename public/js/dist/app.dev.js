"use strict";

console.log('registeer client js');

var generateAccount = function generateAccount(userdata, callback) {
  fetch('http://localhost:3000/generateAccount', {
    method: "post",
    body: JSON.stringify(userdata),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(function (response) {
    response.json().then(function (data) {
      callback(undefined, data);
    })["catch"](function (error) {
      callback(error, undefined);
    });
  })["catch"](function (error) {
    callback(error);
  });
};

var userForm = document.getElementById('rgstr-form');
userForm.addEventListener('submit', function (e) {
  alert('selected');
  e.preventDefault();
  var username = document.getElementById('username-input').value;
  var password = document.getElementById('password-input').value;
  var name = document.getElementById('name-input').value;
  var accountDetails = {
    username: username,
    password: password,
    name: name
  };
  console.log("JSON : " + accountDetails);
  generateAccount(accountDetails, function (error, response) {
    if (error) console.log("app.js fetch json convert error!! : " + error);
  });
});