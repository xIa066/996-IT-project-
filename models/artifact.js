var mongoose = require('mongoose');
var artifactSchema = mongoose.Schema(
	{
		"name": String,
		"date": String,
		"photo": String,
		"ownerID": String,
		"description": String,
		"isItem": Boolean
	},
	{
		collection: "artifacts"
	}
);

mongoose.model('Artifact', artifactSchema);