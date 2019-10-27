const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const PORT = 5000;
const app = express();

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(cors());
dotenv.config();

require('./models/db.js');
var routes = require('./routes/route.js');
app.use('/', routes);

// login session stuff
var session = require('express-session');
var sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// if app is in production stage, serve secure cookies
if (app.get('env') === 'production'){
  sess.cookie.secure = true;
}
app.use(session(sess));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
