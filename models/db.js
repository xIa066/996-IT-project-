// Create connection details for the database
// master js
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://adminUser:team996@appcluster-owus8.mongodb.net/test?retryWrites=true&w=majority";



const options = {
    useNewUrlParser: true,
    dbName: "INFO30005"
};


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://hb:TEST@cluster0-tvtxq.mongodb.net/admin?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// Connect to the MongoDB database
mongoose.connect(dbURI, options).then(() => {
    console.log('Database connection established.');
},
err => {
    console.log('Error connecting to database due to: ', err);
});

mongoose.set('useFindAndModify', false);

// This is where you require shemma
require('./artifact.js');
require('./family.js');
require('./user.js');
