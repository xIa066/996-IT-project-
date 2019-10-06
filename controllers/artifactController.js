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

// find artifact by types
var findAritfactByType = function(req, res){
    var isItem = req.params.isItem;
    Artifact.find({isItem:isitem}, function(err,artifact){
        if(!err && artifact[0] != null){
            res.send(artifact);
        }
        else{
            res.sendStatus(404);
        }
    });
}


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


// creat a new artifact and store details
var createArtifact = function(req, res){
    var artifact = new Artifact({
        "name": req.body.name,
        "date": req.body.date,
        "photo": req.body.photo,
        "ownerID": req.body.ownerID,
        "descripton": req.body.descripton,
        "isItem": req.body.isItem
    });
    artifact.save(function(err, artifact){
        if(!err){
            res.send(artifact);
        }
        else{
            res.sendStatus(400);
        }
    });
};

module.exports.findAllArtifacts = findAllArtifacts;
module.exports.createArtifact = createArtifact;
module.exports.findArtifactByOwner = findArtifactByOwner;
module.exports.findAritfactByType = findAritfactByType;
