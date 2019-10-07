// Setup family schema

var mongoose = require('mongoose');
var familySchema = new mongoose.Schema(
	{
		"name": String,
		// "familyCode": String,
		"owner": String, // ownerID
		"members": [String]

	}
);

const Family = mongoose.model('family', familySchema);

module.exports = Family;