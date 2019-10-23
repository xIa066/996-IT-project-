const mongoose = require('mongoose');
const Family = mongoose.model('family');

// create a new family
var createFamily = function(req, res){

    var family = new Family({
        "name": req.body.name,
        "owner": req.body.owner,
        "members": [{ "memberID": req.body.owner, "alias": req.body.alias }]
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


//find all families belonging to a specfic owner
var findFamiliesByOwner = function(req, res){
    var owner = req.params.ownerID;
    Family.find({owner:owner}, function(err, family){
        if(!err){
            res.send(family);
        }else{
            res.sendStatus(404);
        }
    });
};


// find family by name
var findFamilyByName = function(req, res){
    var name = req.params.name;
    Family.findOne({name:name}, function(err, fmaily){
        if(!err){
            res.send(family);
        }else{
            res.sendStatus(404);
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
    var familyID = req.params.familyID;
    var newMember = {"memberID": req.body.member, "alias": req.body.alias};
    Family.findByIdAndUpdate(familyID, {$push: { "members":newMember }}, {safe: true, upsert: true}, function(err,family){
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
    var familyID = req.params.familyID;
    var member = {"memberID": req.body.member, "alias": req.body.alias};
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
module.exports.findFamiliesByOwner = findFamiliesByOwner;
module.exports.findFamilyByName = findFamilyByName;