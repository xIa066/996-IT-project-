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

// create a new artifact and store details
var createArtifact = function(req, res){
    console.log(req.body);
    var artifact = new Artifact({
        "name": req.body.name,
        "date": req.body.date,
        "photo": req.body.photo,
        "ownerID": req.body.ownerID,
        "description": req.body.description
    });
    artifact.save(function(err, artifact){
        if(!err){
            res.send(artifact);
        }
        else{
            res.sendStatus(err.statusCode);
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
module.exports.deleteArtifact = deleteArtifact;
module.exports.updateArtifact = updateArtifact;
