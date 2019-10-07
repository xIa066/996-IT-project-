// routes/auth.js

var express = require('express');
var router = express.Router();
var passport = require('passport');
var dotenv = require('dotenv');

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

dotenv.config();


// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile'
}), function (req, res) {
  res.redirect('/');
});


// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', function (req, res, next) {
  passport.authenticate('auth0', function (err, user, info) {
    // console.log(info);
    if (err) { return next(err); }
    if (!user) { 
      return res.redirect('/login');
     }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      console.log(user);
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      const userId = user.id.substring(6);
      res.redirect(returnTo || `http://localhost:3000/?authid=${userId}`);
    });
  })(req, res, next);
});


router.get('/getUser', function (req,res) {
  console.log(req.user);
  res.send(req.user);
});


// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          console.log(err)
        }
        console.log("Destroyed the user session on Auth0 endpoint");
        res.redirect(`https://${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=http://localhost:3000/loggedout`);
      });
    }
});

module.exports = router;
