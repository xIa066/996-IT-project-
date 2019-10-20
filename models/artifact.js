// Setup artifact schema

var mongoose = require('mongoose');
var artifactSchema = mongoose.Schema(
	{
		"name": { type:String, required:true },
		"date": { type:String, required:true },
		"photo": { type:String, required:true },
		"ownerID": { type:String, required:true },
		"artifactType": { type:String, required:true },
		"description": String,
		"family": { type: String, default: 'none'}
	},
	{
		collection: "artifacts"
	}
);

mongoose.model('Artifact', artifactSchema);