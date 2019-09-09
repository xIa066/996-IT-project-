// Setup family schema

var mongoose = require('mongoose');
var familySchema = new mongoose.Schema(
	{
		"name": String,
		"familyCode": String,
		"owner": Number, // user ID
		"members": [{"member": Number // userID
	}]

	}
);

const Family = mongoose.model('family', familySchema);

module.exports = Family;