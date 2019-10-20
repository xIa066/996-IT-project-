// Setup users schema

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
	{
		"name": String,
		"userID": String,
		"email": String, 
		"dob": { type: String, required: false },
		"bio": { type: String, required: false },
		"photo": { type: String, required: false },
		"families": [{ "familyName": String }]
	},
	{
		collection: "users"
	}
);

const User = mongoose.model('user', userSchema);

module.exports = User;