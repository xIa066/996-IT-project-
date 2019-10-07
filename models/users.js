// Setup users schema

var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema(
	{
		"name": { type:String, required: true },
		"auth0_ID": { type:String, required: true },
		"email": { type:String, required: true },
		"birth": { type:String, required: true },
		"bio": String,
		"photo": String
	}
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;