const AWS = require('aws-sdk');

require('../services/aws');

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

// var uploadToBucket = function(req, res){
//     var uploadParams = {Bucket: req.body.bucket, Key: '', Body: ''};
//     var file = 
// }
module.exports.getBuckets = getBuckets;