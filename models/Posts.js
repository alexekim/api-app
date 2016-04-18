var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  placeName: String,
  location: Number,
  comment: String,
  picture: String,
  time: Date
});

module.export = mongoose.model("Posts", postSchema)
