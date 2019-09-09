// Setup users schema

var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema(
	{
		"name": String,
		"userID": Number,
		"email": String, // https://www.npmjs.com/package/mongoose-type-email
		"birth": Date,
		"bio": {type: String, required: false},
		"photo": {type: String, required: false} // optional
	}
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;