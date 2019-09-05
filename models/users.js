// Setup users schema

var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema(
	{
		"name": String,
		"password": String,
		"email": String, // https://www.npmjs.com/package/mongoose-type-email
		"birth": Date,
		"bio": String
	}
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;