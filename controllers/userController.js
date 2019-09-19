const mongoose = require('mongoose');
const Users = mongoose.model('user');




module.exports.findAllArtifact = findAllArtifact;
module.exports.createArtifact = createArtifact;
module.exports.findArtifactByOwner = findArtifactByOwner;
