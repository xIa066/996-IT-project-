const mongoose = require('mongoose');
const Family = mongoose.model('family');

// creat a new family
var createFamily = function(req, res){
    var family = new Family({
        "name": req.body.name,
        "familyCode": makeid(6),
        "members": [req.body.owner],
        "owner": req.body.owner
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

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
};

module.exports.createFamily = createFamily;