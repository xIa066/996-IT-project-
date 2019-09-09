// Setup items schema

var mongoose = require('mongoose');
var itemsSchema = new mongoose.Schema(
	{
		"name": String,
		"date": {
			"startDate": Date,
			"endDate": {type: Date, default: Date.now}
		},
		"photo": String // URL link
		"ownerID": Number,
		"description": String
		// "comments": [{body: String, date: Date}],
		// "likes": Number
	}
);

const Items = mongoose.model('items', itemsSchema);

module.exports = Items;