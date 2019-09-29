const express = require('express');
const artifactControl = require('../controllers/artifactController.js');
const awsControl = require('../controllers/awsController');
const router = express.Router();
const mongoose = require('mongoose');
const Artifact = mongoose.model('Artifact');

//lists all available buckets
router.get('/buckets', awsControl.getBuckets);

// Finding all the artifact
router.get('/artifacts', artifactControl.findAllArtifacts);

// finding artifact by owner id
router.get('/getArtifacts/:ownerID', artifactControl.findArtifactByOwner);

// Finding artifact by object id
router.get('/getArtifact/:id', artifactControl.findArtifactByObject);

// Creating an artifact
router.post('/createArtifact', artifactControl.createArtifact);

// Upload an image
router.post('/uploadImage', awsControl.uploadToBucket);

// delete artifact by id
router.delete('/delete/:id', artifactControl.deleteArtifact);


// export the route in the server.js
module.exports = router;
