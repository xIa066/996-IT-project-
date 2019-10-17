// Setup users schema

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
	{
		"name": { type:String, required: true },
		"auth0_ID": { type:String, required: true },
		"email": { type:String, required: true },
		"birth": { type:String, required: true },
		"bio": String,
		"photo": String
	}
);

const User = mongoose.model('user', userSchema);

module.exports = User;