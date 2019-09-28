const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('../services/aws');

const upload = require('../services/image-upload');
const singleImageUpload = upload.single('image');

var s3 = new AWS.S3({apiVersion: '2006-03-01'});

var getBuckets = function(req, res){
    s3.listBuckets(function(err, data) {
        if (err){
            console.log("Error", err);
        }else{
            res.send(data.Buckets);
            console.log("Success", data.Buckets);
        }
    });
}

var uploadToBucket = function(req, res){
    singleImageUpload(req, res, function(err){
        if(!err){
            res.send({imageUrl: req.file.location});
        }else{
            res.sendStatus(404);
            console.log(err);
        }
    })
}

module.exports.getBuckets = getBuckets;
module.exports.uploadToBucket = uploadToBucket;