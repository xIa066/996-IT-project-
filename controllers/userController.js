const mongoose = require('mongoose');
const User = mongoose.model('user');

// Creating a user
var createUser = function(req,res){
	var user = new User({
		"name": req.body.name,
		"auth0_ID": req.body.id,
		"email": req.body.email, 
		"birth": req.body.birth,
		"bio": req.body.bio,
		"photo": req.body.photo
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

var editProfile = function(req,res){
	User.findOneAndUpdate({"auth0_ID": req.body.id}, {
        "name": req.body.name,
        "birth": req.body.birth,
        "email": req.body.email,
        "birth": req.body.birth,
        "bio": req.body.bio,
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

module.exports.createUser = createUser;
module.exports.editProfile = editProfile;