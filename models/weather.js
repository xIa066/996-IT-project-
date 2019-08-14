// Setup weather schema for storing weather details
var mongoose = require('mongoose');
var weatherSchema = mongoose.Schema(
    {
        //dummy schema, will be using api live data
        "city": String,
        "weatherdesc": String,
        "longitude": String,
        "latitude": String,
        "time": Date
    },
    {
        // To prevent mongodb's smart naming convention
        collection: "weather"
    }
);
mongoose.model('weather', weatherSchema);
