const express = require('express');
const bodyParser = require('body-parser');;

const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./models/db.js');
var routes = require('./routes/route.js');
app.use('/', routes);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/*****************************************************/


