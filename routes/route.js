const express = require('express');

const familyController = require('../controllers/familyController.js');
const router = express.Router();

router.post('/createFamily', familyController.createFamily);



module.exports = router;
