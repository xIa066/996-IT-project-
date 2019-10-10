const mongoose = require('mongoose');
const Family = mongoose.model('family');

// creat a new family
var createFamily = function(req, res){
    var family = new Family({
        "name": req.body.name,
        "owner": req.body.owner,
        // "familyCode": tempCode,
        "members": [{"member": req.body.owner}]
    });
    family.save(function(err, family){
        if(!err){
            res.send(family);
        }
        else{
            res.sendStatus(400);
        }
    });

};



// produce random code with length
// function makeid(length) {
//    var result           = '';
//    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    var charactersLength = characters.length;
//    for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// };


// finding all family
var findAllFamily = function(req,res){
    Family.find(function(err,family){
        if(!err){
            res.send(family);
        }
        else{
            res.sendStatus(404);
            }
    });
};


var addMember = function(req,res){
    var family = req.body.familyCode;
    var newMember = {"member": req.body.member};
    Family.findByIdAndUpdate(family, {$push: {"members": newMember }}, function(err,family){
        if(!err){
            res.send(family);
        }
        else{
            console.log(err);
            }
    });
};


module.exports.createFamily = createFamily;
module.exports.findAllFamily = findAllFamily;
module.exports.addMember = addMember;