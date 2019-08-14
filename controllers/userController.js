const mongoose = require('mongoose');
const Users = mongoose.model('user');

// Find all users
var findAllUsers = function(req,res){
    Users.find(function(err,user){
        if(!err){
            res.send(user);
        }
        else{
            res.sendStatus(404);
            }
    });
};

// Find users by surname
var findUserBySurname = function(req,res){
    var userSurname = req.params.surname;
    Users.find({surname:userSurname},function(err,user){
        if(!err && user[0] != null){
            res.send(user);
        }
        else{
            res.sendStatus(404);
        }
    });
};

// Create a new user and store details
var createUser = function(req, res){
    var user = new Users({
        "firstname": req.body.firstname,
        "surname": req.body.surname,
        "email": req.body.email,
        "age": req.body.age
    });
    user.save(function(err, user){
        if(!err){
            res.send(user);
        }
        else{
            res.sendStatus(400);
        }
    });
};

// Create new trip
var createTrip = function(req, res){
  console.log("tryomh");
  console.log(req.body);
  var trip = {
    "Summary": req.body.summary,
    "Temperature": req.body.temperature,
    "WindSpeed": req.body.windSpeed,
    "Distance": req.body.distanace,
    "Duration": req.body.duration,
    "Destination": req.body.destination
  }
  Users.findById(req.body.userID, function(err, user){
    user.trips.push(trip);
    user.save(function(err){
      if(err) return handleError(err);
    });
  });
};
module.exports.findAllUsers = findAllUsers;
module.exports.findUserBySurname = findUserBySurname;
module.exports.createUser = createUser;
module.exports.createTrip = createTrip;
