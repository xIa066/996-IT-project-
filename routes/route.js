const express = require('express');
const artifactControl = require('../controllers/artifactController.js');
const awsControl = require('../controllers/awsController');
const familyControl = require('../controllers/familyController');
const router = express.Router();
const mongoose = require('mongoose');

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

// update artifact
router.put('/update/:id', artifactControl.updateArtifact);

// Finding artifact by type (true or false)
router.get('/type/:isItem', artifactControl.findAritfactByType); 

// Creating a family
router.post('/createFamily', familyControl.createFamily);

// Adding a member to a family
router.post('/addMember', familyControl.addMember);

// Deleting a member from a family
router.post('/deleteMember', familyControl.deleteMember);

// export the route in the server.js
module.exports = router;
