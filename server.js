const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
var userInViews = require('./lib/middleware/userInViews');
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

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


// if app is in production stage, serve secure cookies
if (app.get('env') === 'production'){
  sess.cookie.secure = true;
}
app.use(session(sess));

var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:5000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(accessToken);
    return done(null, profile);
  }
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

app.use(userInViews());

app.use(( err, req, res, next ) => {
  res.locals.error = err;
  if (err.status >= 100 && err.status < 600)
    res.status(err.status);
  else
    res.status(500);
  res.render('error');
  res.locals.user = req.user;
});

app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
