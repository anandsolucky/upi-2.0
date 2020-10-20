"use strict";

console.log('search client js');
var searchForm = document.getElementById('frm-form');

var fetchRecods = function fetchRecods(accountNumber, callback) {
  fetch("http://localhost:3000/searchRecords?ac=" + accountNumber).then(function (response) {
    response.json().then(function (data) {
      callback(undefined, data);
    })["catch"](function (error) {
      callback(error, undefined);
    });
  })["catch"](function (error) {
    callback(error, undefined);
  });
};

searchForm.addEventListener('submit', function (e) {
  var inputAccountnum = document.getElementById("ac-input").value;
  e.preventDefault();
  var fetchedData = fetchRecods(inputAccountnum, function (error, response) {
    if (error) console.log("error in receiving data " + error);else {
      console.log("data successfully received! " + response.status);

      if (response.status == "found") {
        alert("status: " + response.status + " | name: " + response.data.name + " | username : " + response.data.username);
      } else {
        alert("user not found!");
      }
    }
  });
});