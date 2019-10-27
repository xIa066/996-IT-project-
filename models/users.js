// Setup users schema

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
	{
		"name": String,
		"userID": String,
		"email": String, 
		"dob": { type: String, default: null },
		"bio": { type: String, default: null },
		"photo": { type: String, default: null },
		"families": [{ "familyName": String, "familyID": String }]
	},
	{
		collection: "users"
	}
);

const User = mongoose.model('user', userSchema);

module.exports = User;