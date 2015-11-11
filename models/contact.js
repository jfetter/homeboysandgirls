//model
"use strict"
var file = require("file-system");
var fs = require("fs");

var Contact = {};

Contact.find = function(cb){
	fs.readFile("/db/contacts.json", function (err, data){
		if(err){
			cb(err);
		} else{
			var contacts = JSON.parse(data);
			cb(null, todos);
		}
	})
}

module.exports = Contact; 