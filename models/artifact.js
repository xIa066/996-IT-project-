var mongoose = require('mongoose');
var artifactSchema = mongoose.Schema(
	{
		"name": String,
		"date": String,
		"photo": String,
		"ownerID": String,
		"isItem": Boolean,
		"description": String
	}
);

mongoose.model('Artifact', artifactSchema);