// Create connection details for the database
const mongoose = require('mongoose');
const dbURI = process.env.dbURI || "mongodb+srv://prolific:prolific@prolific-nsump.mongodb.net/test?retryWrites=true";

const options = {
    useNewUrlParser: true,
    dbName: "INFO30005"
};

// Connect to the MongoDB database
mongoose.connect(dbURI, options).then(() => {
    console.log('Database connection established.');
},
err => {
    console.log('Error connecting to Database due to: ', err);
});

require('./users.js');
require('./trips.js');
