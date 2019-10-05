const mongoose = require('mongoose');
const Users = mongoose.model('user');



// creat a new user
var createUser = function(req, res){
    var user = new Users({
        "name": req.body.name,
        "userID": req.body.userID,
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


module.exports.createUser = createUser;