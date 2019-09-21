// Setup items schema

var mongoose = require('mongoose');
var itemsSchema = new mongoose.Schema(
	{
		"name": String,
		"date": {
			"startDate": Date,
			"endDate": {type: Date, default: Date.now}
		},
		"photo": String,
		"ownerID": Number,
		"description": {
			"stories":String,
			"usedFor":String,
			"importance":String
		}

	}
);

const Items = mongoose.model('items', itemsSchema);

module.exports = Items;