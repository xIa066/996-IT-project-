// Setup parking schema for storing parking name and location
var mongoose = require('mongoose');
var parkingSchema = mongoose.Schema(
    {
        //dummy schema, will be using api live data
        "city": String,
        "longitude": String,
        "latitude": String
    },
    {
        // To prevent mongodb's smart naming convention
        collection: "parking"
    }
);
mongoose.model('parking', parkingSchema);
