const express = require('express');
const artifactControl = require('../controllers/artifactController.js');
const router = express.Router();
const jsonParser = require('body-parser').json();
// Display Home page, Setting up the route for the homepage


// Finding all the artifact
router.get('/artifacts', artifactControl.findAllArtifacts);

// Creating an artifact
router.post('/createArtifact', artifactControl.createArtifact);

// export the route in the server.js
module.exports = router;
