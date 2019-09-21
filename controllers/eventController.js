const mongoose = require('mongoose');
const Event = mongoose.model('Event');


// find all Event
var findAllEvents = function(req,res){
    Event.find(function(err,event){
        if(!err){
            res.send(event);
        }
        else{
            res.sendStatus(404);
            }
    });
};


var findEventByOwner = function(req,res){
    var owner = req.params.ownerID;
    Event.find({ownerID:owner},function(err,event){
        if(!err && event[0] != null){
            res.send(event);
        }
        else{
            res.sendStatus(404);
        }
    });
};


// create a new Event and store details
var createEvent = function(req, res){
    console.log(req.body);
    var event = new Event({
        "name": req.body.name,
        "date": req.body.date,
        "photo": req.body.photo,
        "ownerID": req.body.ownerID,
        "place":String,
        "description": req.body.description
    });
    event.save(function(err, event){
        if(!err){
            res.send(event);
        }
        else{
            res.sendStatus(400);
        }
    });
};

module.exports.findAllEvents = findAllEvents;
module.exports.createEvent = createEvent;
module.exports.findEventByOwner = findEventByOwner;
