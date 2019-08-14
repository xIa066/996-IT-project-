const mongoose = require('mongoose');
const Trips = mongoose.model('trips');
  // Find all trips
var findAllTrips = function(req,res){
    Trips.find(function(err,trips){
        if(!err){
            res.send(trips);
        }
        else{
            res.sendStatus(404);
        }
    });
};

module.exports.findAllTrips = findAllTrips;
