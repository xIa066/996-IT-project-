const express = require('express');
const artifactControl = require('../controllers/artifactController.js');
const awsControl = require('../controllers/awsController');
const familyControl = require('../controllers/familyController');
const userControl = require('../controllers/userController');

const router = express.Router();

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

// Find artifacts by type
router.get('/getArtifactsByType/:type', artifactControl.findAritfactByType);

// Finding all families
router.get('/families', familyControl.findAllFamilies);

// Finding artifacts by family
router.get('/getArtifactsByFamily', artifactControl.findFamilyArtifacts);

// Find user by auth0ID
router.get('/getUser/:id', userControl.getUser);

// find all of a users owned families
router.get('/getFamiliesByOwner/:ownerID', familyControl.findFamiliesByOwner);

// find family by name
router.get('/getFamilyByName/:name', familyControl.findFamilyByName);

/********************************
 *  POST METHODS
 ********************************/

// Creating an artifact
router.post('/createArtifact', artifactControl.createArtifact);

// Upload an image
router.post('/uploadImage', awsControl.uploadToBucket);

// Create a family
router.post('/createFamily', familyControl.createFamily);

// Create a user
router.post('/createUser', userControl.createUser);

/********************************
 *  DELETE METHODS
 ********************************/

// delete artifact by id
router.delete('/delete/:id', artifactControl.deleteArtifact);

// delete member
router.delete('/deleteMember', familyControl.deleteMember);

// remove family from user profile
router.delete('/removeFamily',  userControl.removeFamily);

/********************************
 *  PUT METHODS
 ********************************/

// update artifact
router.put('/update/:id', artifactControl.updateArtifact);

// add a new family member
router.put('/addMember', familyControl.addMember);

// update user info
router.put('/updateUser', userControl.updateUser);

// update user profile to contain a new family
router.put('/addFamily', userControl.addFamily);


// export the route in the server.js
module.exports = router;
