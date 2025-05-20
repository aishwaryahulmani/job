const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  link: String,
  posted: String,
  location:String,
  exp:String
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
