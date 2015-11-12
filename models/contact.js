//model
"use strict"

var fs = require("fs");

var Contact = {};
var db = "'db/contacts.json";

// I believe the variable contact is brought in by
// way of call back functions from the router...
// pg 50: https://slack-files.com/files-pri-safe/T02RY0ZTD-F0E9FDQJF/mean_machine_a_beginner_s_practical_guide.pdf?c=1447227196-aa95197f6e67f0ab1377a9e2f6d0fdf417b96c3a

Contact.find = function(cb){
	fs.readFile(db, function (err, data){
		console.log("hey you got to model")
		if(err) {
			return cb(err);
		} else{
			var contacts = JSON.parse(data);			
			console.log("all contacts: ", contacts)
			cb(null, contacts);
		}
	})//readFile
}//Contact.find

Contact.create = function(contact, cb){
	Contact.find = (function(err, contacts){
		contacts.push(contact);
			var data = JSON.stringify(contacts);
			fs.writeFile(db, data);
			console.log("all contacts: ", data);
	});
};

Contact.delete = function(cb){
	Contact.find(function(err, contacts){
		var contIndex = select(); //prob can combine
		//var n = contact.length();
		contacts = contacts.splice(contIndex, 1);
		console.log("now contacts is: ", contacts)
		var data = JSON.stringify(contacts);
		fs.writeFile(db, data, cb);
	});
};

Contact.update = function(cb){
	Contact.find(function(err, contacts){
		  var contIndex = select();
		  contacts = contacts.splice(contIndex, 1, contact)
			var data = JSON.stringify(contacts);
			console.log("contacts: ", contacts)
			fs.writeFile(db, data);
	})
}
// alphabatize the list by a certain 
function alphaB(param){
	Contact.find(function(err, contacts){
	contacts.param.sort();
	var data = JSON.stringify(contacts);
	console.log("contacts: ", contacts)
	fs.writeFile(db, data, cb);
	})
}

// this function will allow selection of one
// particular contact (for editing and deleting)
function select () {
var ind;
contacts.forEach(function(item, index, all){
      if (contact === item) 
      ind = index;
})
 		return ind;
}

module.exports = Contact; 