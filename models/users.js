const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  accountNumber: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

});

const users = mongoose.model("users", usersSchema);
module.exports = users;