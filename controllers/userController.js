const mongoose = require('mongoose');
const User = mongoose.model('user');

var createUser =  function (req, res){
    var user = new User({
        "name": req.body.name,
        "userID": req.body.userID,
        "email": req.body.email,
        "dob": req.body.dob,
        "bio": req.body.bio,
        "photo": req.body.photo,
        "families": []
    });
    user.save(function(err, user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};


var updateUser = function (req, res){
    var userID = req.body.userID;
    User.findOneAndUpdate({userID: userID}, {
        "name": req.body.name,
        "dob": req.body.dob,
        "bio": req.body.bio
    }, function(err, user){
        if(!err){
            console.log("User Successfully Updated");
            res.send(user);
        }else{
            console.log(err);
        }
    });
};

var updateUserPicture = function (req, res){
    var userID = req.body.userID;
    User.findOneAndUpdate({userID: userID}, {
        "photo": req.body.photo
    }, function(err, user){
        if(!err){
            console.log("User Successfully Updated");
            res.send(user);
        }else{
            console.log(err);
        }
    });

};

// adding a family
var addFamily = function (req, res){
    var userID = req.params.userID;
    var newFamily = { "familyName": req.body.familyName };
    User.findOneAndUpdate({userID: userID}, {$push: { "families": newFamily }}, {safe: true, upsert: true}, function(err, user){
        if(!err){
            console.log("Family Successfully Added");
            res.send(newFamily);
        }else{
            console.log(err);
        }
    });
};

// remove family from 
var removeFamily = function (req, res){
    var userID = req.params.userID;
    var newFamily = { "familyName": req.body.familyName };
    User.findOneAndUpdate({userID: userID}, {$pull: { "families": newFamily }}, function(err, user){
        if(!err){
            console.log("Family Successfully Removed");
            res.send(newFamily);
        }else{
            console.log(err);
        }
    });
};

// get user
var getUser = function (req, res){
    var userID = req.params.id;
    User.findOne({userID:userID}, function(err, user){
        if(!err){
            res.send(user);
        }else{
            console.log(err);
        }
    });
};

module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.updateUserPicture = updateUserPicture;
module.exports.addFamily = addFamily;
module.exports.removeFamily = removeFamily;
module.exports.getUser = getUser;