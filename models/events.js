// Setup events schema

var mongoose = require('mongoose');
var eventsSchema = new mongoose.Schema(
	{
		"name": String,
		"date": {type: Date, default: Date.now},
		"photo": {type: String, required: false}, // URL link
		"ownerID": Number,
		"place": String,
		"description": String
	}
);

const Events = mongoose.model('events', eventsSchema);

module.exports = Events;