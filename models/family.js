// Setup family schema

var mongoose = require('mongoose');
var familySchema = new mongoose.Schema(
	{
		"name": {type: String, required: true},
		"familyCode": {type: String, required: true},
		"owner": Number, // user ID
		"members": [{"member": Number // userID
	}]

	}
);

const Family = mongoose.model('family', familySchema);

module.exports = Family;