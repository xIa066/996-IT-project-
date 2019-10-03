// routes/auth.js

var express = require('express');
var router = express.Router();
var passport = require('passport');
var dotenv = require('dotenv');
// var util = require('util');
// var url = require('url');
// var querystring = require('querystring');
dotenv.config();

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile'
}), (req, res) => {
  // This is the URL that redirect after thrid party login page
  console.log('1');
  // res.redirect('http://localhost:3000');
});

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', function (req, res, next) {
  console.log("2");
  passport.authenticate('auth0', function (err, user, info) {
    console.log("3");
    if (err) { 
      console.log("4");
      return next(err);}
    if (!user) { 
      console.log('5');
      return res.redirect('/login'); }
    req.logIn(user, function (err) {
      console.log('6');
      if (err) { return next(err); }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || '/user');
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          console.log(err)
        }
        console.log('destroy Session');
        // Should retrun to the login page: localhost:3000/loggedout
        res.redirect(`https://${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=http://localhost:3000/loggedout`);
      });
    }
});

module.exports = router;
