const express = require('express');
const artifactControl = require('../controllers/artifactController.js');
const router = express.Router();
const jsonParser = require('body-parser').json();
// Display Home page, Setting up the route for the homepage


// Finding all the artifact
router.get('/artifacts', artifactControl.findAllArtifacts);

// finding artifact by owner id
router.get('/getArtifacts/:ownerID', artifactControl.findArtifactByOwner);

// Finding artifact by object id
router.get('/getArtifact/:id', artifactControl.findArtifactByObject);

// Creating an artifact
router.post('/createArtifact', artifactControl.createArtifact);


// export the route in the server.js
module.exports = router;
