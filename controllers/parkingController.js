const mongoose = require('mongoose');
const Parking = mongoose.model('parking');

// Find all bicycle parking spaces
var findAllParking = function(req,res){
    Parking.find(function(err,parking){
        if(!err){
            res.send(parking);
        }
        else{
            res.sendStatus(404);
        }
    });
};

// Find parking data based on city, Case Sensative
var findParkingByCity = function(req,res){
    var city = req.params.city;
    Parking.find({city:city},function(err,parking){
        if(!err && parking[0] != null){
            res.send(parking);
        }
        else{
            res.sendStatus(404);
        }
    });
};

// Create a new Parking and store details
var createParking = function(req, res){
    var parking = new Parking({
        "city": req.body.city,
        "longitude": req.body.longitude,
        "latitude": req.body.latitude
    });
    parking.save(function(err, parking){
        if(!err){
            res.send(parking);
        }
        else{
            res.sendStatus(400);
        }
    });
};

module.exports.findParkingByCity = findParkingByCity;
module.exports.findAllParking = findAllParking;
module.exports.createParking = createParking;
