const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');


const PORT = 5000;
const app = express();

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(cors());

require('./models/db.js');

var routes = require('./routes/route.js');
app.use('/', routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
console.log('fresh');
