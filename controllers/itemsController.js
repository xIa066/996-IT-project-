const mongoose = require('mongoose');
const Item = mongoose.model('Item');


// find all Item
var findAllItems = function(req,res){
    Item.find(function(err,item){
        if(!err){
            res.send(item);
        }
        else{
            res.sendStatus(404);
            }
    });
};


var findItemByOwner = function(req,res){
    var owner = req.params.ownerID;
    Item.find({ownerID:owner},function(err,item){
        if(!err && item[0] != null){
            res.send(item);
        }
        else{
            res.sendStatus(404);
        }
    });
};


// create a new Item and store details
var createItem = function(req, res){
    console.log(req.body);
    var item = new Item({
        "name": req.body.name,
        // I'm not sure if for date property, it is the
        // correct way to put it.
        "date": {
            "startDate": req.body.startDate,
            "endDate": req.body.endDate
        },
        "photo": req.body.photo,
        "ownerID": req.body.ownerID,
        "description": {
            "stories": req.body.stories,
            "usedFor": req.body.usedFor,
            "importance": req.body.whyImportant
        }
    });
    item.save(function(err, item){
        if(!err){
            res.send(Item);
        }
        else{
            res.sendStatus(400);
        }
    });
};

module.exports.findAllItems = findAllItems;
module.exports.createItem = createItem;
module.exports.findItemByOwner = findItemByOwner;
