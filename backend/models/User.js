const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add first name"]
  },
  lastName: {
    type: String,
    required: [true, "Please add last name"]
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please add a password"]
  },
  phone: {
    type: Number,
  },
  location: {
    type: String,
    // required: [true, "Please add a password"]
  },
  summary: {
    type: String,
    // required: [true, "Please add a password"]
  },
  skills: {
    type: String
  },
  resume: {
    data: Buffer,
    contentType: String,
    filename: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
