var AWS = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');

var s3 = new AWS.S3({apiVersion: '2006-03-01'});
 
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'bloodlinestalesroots',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'slide2.jpg'});
    },
    key: function (req, file, cb) {
      console.log(file);  
      cb(null, `${Date.now().toString()}_${file.originalname}`);
    }
  })
});

module.exports = upload;