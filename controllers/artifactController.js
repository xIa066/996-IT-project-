const mongoose = require('mongoose');
const Artifact = mongoose.model('Artifact');


// find all artifact
var findAllArtifacts = function(req,res){
    Artifact.find(function(err,artifact){
        if(!err){
            res.send(artifact);
        }
        else{
            res.sendStatus(404);
            }
    });
};

// find artifact by owner id
var findArtifactByOwner = function(req,res){
    var owner = req.params.ownerID;
    Artifact.find({ownerID:owner},function(err,artifact){
        if(!err && artifact[0] != null){
            res.send(artifact);
        }
        else{
            res.sendStatus(404);
        }
    });
};


var findArtifactByType = function(req, res){
    var _artifactType = req.params.artifactType;
    Artifact.find({artifactType:_artifactType}, function(err,artifact){
        if(!err && artifact[0] != null){
            res.send(artifact);
        }
        else{
            res.sendStatus(404);
            console.log("404");
        }
    });
}


// find artifact by object id
var findArtifactByObject = function (req, res){
    var obj = req.params.id;
    Artifact.find({_id:obj}, function(err, artifact){
        if(!err && artifact[0] != null) {
            res.send(artifact);
        }else{
            res.sendStatus(404);
        }
    });
};

// find all artifacts belonging to a family group
var findFamilyArtifacts = function(req, res){
    var familyName = req.params.familyName;
    Artifact.find({ family: familyName }, function(err, artifact){
        if(!err){
            res.send(artifact);
        }else{
            res.sendStatus(404);
        }
    });
};


// create a new artifact and store details
var createArtifact = function(req, res){
    var artifact = new Artifact({
        "name": req.body.name,
        "date": req.body.date,
        "photo": req.body.photo,
        "ownerID": req.body.ownerID,
        "artifactType": req.body.artifactType,
        "description": req.body.description,
        "family": req.body.family
    });
    artifact.save(function(err, artifact){
        if(!err){
            res.send(artifact);
        }
        else{
            res.sendStatus(404);
            console.log(err);
        }
    });
};


// Delete artifact by object id
var deleteArtifact = function(req, res){
    Artifact.findByIdAndDelete(req.params.id, function(err, artifact){
        if(!err){
            console.log("Artifact Successfully Deleted!");
            res.send(artifact);
        }else{
            console.log(err);
        }
    });
}


var updateArtifact = function(req, res){
    Artifact.findByIdAndUpdate(req.params.id, {
        "name": req.body.name,
        "date": req.body.date,
        "photo": req.body.photo,
        "ownerID": req.body.ownerID,
        "artifactType": req.body.artifactType,
        "description": req.body.description
    }, function(err, artifact){
        if(!err){
            console.log("Artifact Successfully Updated");
            res.send(artifact);
        }else{
            console.log(err);
        }
    });
}

module.exports.findAllArtifacts = findAllArtifacts;
module.exports.createArtifact = createArtifact;
module.exports.findArtifactByOwner = findArtifactByOwner;
module.exports.findArtifactByObject = findArtifactByObject;
module.exports.findArtifactByType = findArtifactByType;
module.exports.deleteArtifact = deleteArtifact;
module.exports.updateArtifact = updateArtifact;
module.exports.findFamilyArtifacts = findFamilyArtifacts;
