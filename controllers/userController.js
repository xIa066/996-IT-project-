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
    })
}

module.exports.createUser = createUser;
module.exports.updateUser = updateUser;