const express = require('express');
const artifactControl = require('../controllers/artifactController.js');
const awsControl = require('../controllers/awsController');
const familyControl = require('../controllers/familyController');

const router = express.Router();
const mongoose = require('mongoose');


/********************************
 *  GET METHODS
 ********************************/

//lists all available buckets
router.get('/buckets', awsControl.getBuckets);

// Finding all the artifact
router.get('/artifacts', artifactControl.findAllArtifacts);

// finding artifact by owner id
router.get('/getArtifacts/:ownerID', artifactControl.findArtifactByOwner);

// Finding artifact by object id
router.get('/getArtifact/:id', artifactControl.findArtifactByObject);

// Find artifact by type
router.get('/getArtifact/:type', artifactControl.findAritfactByType);

// Finding all families
router.get('/families', familyControl.findAllFamilies);


/********************************
 *  POST METHODS
 ********************************/

// Creating an artifact
router.post('/createArtifact', artifactControl.createArtifact);

// Upload an image
router.post('/uploadImage', awsControl.uploadToBucket);

// Create a family
router.post('/createFamily', familyControl.createFamily);


/********************************
 *  DELETE METHODS
 ********************************/

// delete artifact by id
router.delete('/delete/:id', artifactControl.deleteArtifact);

// delete member
router.delete('/deleteMember', familyControl.deleteMember);


/********************************
 *  PUT METHODS
 ********************************/

// update artifact
router.put('/update/:id', artifactControl.updateArtifact);

// add a new family member
router.put('/addMember', familyControl.addMember);

// export the route in the server.js
module.exports = router;
