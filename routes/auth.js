// routes/auth.js

var express = require('express');
var router = express.Router();
var passport = require('passport');
var dotenv = require('dotenv');
var util = require('util');
var url = require('url');
var querystring = require('querystring');

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
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function (err) {
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
        console.log("Destroyed the user session on Auth0 endpoint");
        // 
        res.redirect('https://bloodlines.au.auth0.com/v2/logout?client_id=00BfjL4zO0b60UjoFTLszZKV744B5ZtO');
      });
    }
});

// req.logout();
//   if (req.session) {
//     req.session.destroy(function (err) {
//       if (err) {
//         console.log(err)
//       }
//       console.log("Destroyed the user session on Auth0 endpoint");
//       res.redirect('https://bloodlines.au.auth0.com/v2/logout?client_id=00BfjL4zO0b60UjoFTLszZKV744B5ZtO&returnTo=http://localhost:3000/');
//     });
//   }

module.exports = router;
