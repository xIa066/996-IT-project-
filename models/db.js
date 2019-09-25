// Create connection details for the database
// master js
const mongoose = require('mongoose');
const dbURI = process.env.dbURI || "mongodb+srv://adminUser:team996@appcluster-owus8.mongodb.net/test?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    dbName: "INFO30005"
};

// Connect to the MongoDB database
mongoose.connect(dbURI, options).then(() => {
    console.log('Database connection established.');
},err => {
    console.log('Error connecting to Database due to: ', err);
});

require('./family.js');