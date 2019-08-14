// Setup trips schema for storing weather details
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
    {
      "googleId": String,
      "username": String,
      "firstname": String,
      "surname": String,
      "thumbnail": String,
      "trips": [
        {
          Summary: String,
          Temperature: String,
          WindSpeed: String,
          Distance: String,
          Duration: String,
          Destination: String
        }]
    }
);
const Users = mongoose.model('user', userSchema);

module.exports = Users;
