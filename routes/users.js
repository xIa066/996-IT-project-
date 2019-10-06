// routes/users.js

var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  console.log("yerp");
  console.log(req.user);
  res.send({title:"profile", userProfile: userProfile});
});

module.exports = router;