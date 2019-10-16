const mongoose = require('mongoose');
const Family = mongoose.model('family');

// create a new family
var createFamily = function(req, res){

    var family = new Family({
        "name": req.body.name,
        "owner": req.body.owner,
        "members": [{"memberID": req.body.owner}]
    });
    family.save(function(err, family){
        if(!err){
            res.send(family);
        }
        else{
            res.sendStatus(400);
        }
    });

};


// finding all families
var findAllFamilies = function(req,res){
    Family.find(function(err,family){
        if(!err){
            res.send(family);
        }
        else{
            res.sendStatus(404);
        }
    });
};


// adding a member
var addMember = function(req,res){
    var familyID = req.body.familyID;
    var newMember = {"memberID": req.body.member};
    Family.findByIdAndUpdate(familyID, {$push: {"members":newMember }}, {safe: true, upsert: true}, function(err,family){
        if(!err){
            res.send(family);
        }
        else{
            console.log(err);
        }
    });
};

// deleting a member
var deleteMember = function(req,res){
    var familyID = req.body.familyID;
    var member = {"memberID": req.body.member};
    Family.findByIdAndUpdate(familyID, {$pull: {"members": member}}, function(err,family){
        if(!err){
            res.send(family);
        }
        else{
            console.log(err);
        }
    });
};


module.exports.createFamily = createFamily;
module.exports.findAllFamilies = findAllFamilies;
module.exports.addMember = addMember;
module.exports.deleteMember = deleteMember;