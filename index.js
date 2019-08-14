 const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client/build'));

// initialize passport
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());


//MongoDB Database Setup
require('./models/db.js');


//routing Setup

// set up routes
app.use('/auth', authRoutes);

var routes = require('./routes/routes.js');
app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
