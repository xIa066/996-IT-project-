// Setup artifact schema

var mongoose = require('mongoose');
var artifactSchema = new mongoose.Schema(
	{
		"name": String,
		"date": {type: Date, default: Date.now},
		"photo": String, // URL link
		"ownerID": Number，
		"description": String
		// "comments": [{body: String, date: Date}],
		// "likes": Number 

	}
);

const Artifacts = mongoose.model('artifact', artifactSchema);

module.exports = Artifacts;