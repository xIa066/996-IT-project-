// Setup family schema

var mongoose = require('mongoose');
var familySchema = new mongoose.Schema(
	{
		"name": String,
		"owner": String,
		"desc": String,
		"members": [{"memberID": String}]

	},{
		collection: "families"
	}
);

const Family = mongoose.model('family', familySchema);

module.exports = Family;