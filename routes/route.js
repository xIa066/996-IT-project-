const express = require('express');
const router = express.Router();

const artifactController = require('../controllers/artifactController');


// Finding all the artifact
router.get('/artifacts', artifactControl.findAllArtifacts);


module.exports = router;
