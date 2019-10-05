const express = require('express');
const router = express.Router();
const artifactController = require('../controllers/artifactController');
const familyController = require('../controllers/familyController');
const router = express.Router();

router.post('/createFamily', familyController.createFamily);

router.get('/findAllFamily', familyController.findAllFamily);


// Finding all the artifact
router.get('/artifacts', artifactController.findAllArtifacts);


module.exports = router;
