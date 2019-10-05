// Setup users schema

var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema(
	{
		"name": String,
		"userID": {type: String, required: true},
		"email": String, // https://www.npmjs.com/package/mongoose-type-email
		"birth": Date,
		"bio": String,
		"photo": String // optional
	}
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;