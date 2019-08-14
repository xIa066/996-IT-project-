// Setup trips schema for storing weather details
var mongoose = require('mongoose');
var tripsSchema = new mongoose.Schema(
    {
      //dummy schema, will be using api live data
      "temperature": String,
      "time": String
    }
);
mongoose.model('trips', tripsSchema);
