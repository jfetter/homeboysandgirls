//model
"use strict"
//this version of fs is async
//var file = require("file-system");
//this version is synchronous
var fs = require("fs");

var Contact = {};

Contact.find = function(cb){
	fs.readFile("contacts.json", function (err, data){
		console.log("hey you got to model")
		if(err){
			cb(err);
		} else{
			console.log(data)
			var contacts = JSON.parse(data);
			cb(null, contacts);
		}
	})
}

module.exports = Contact; 