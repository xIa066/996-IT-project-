// Setup artifact schema

var mongoose = require('mongoose');
var artifactSchema = mongoose.Schema(
	{
		"name": String,
		"date": String,
		"photo": String,
		"ownerID": String,
		"description": String
	},
	{
		collection: "artifacts"
	}
);

mongoose.model('Artifact', artifactSchema);
