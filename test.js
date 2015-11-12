var request = require('request');
var Contact = require("./models/contact")

Contact.create(function(err, contacts){
  if (err){
    console.log("error with find")
  }
  console.log("found contacts", contacts)
});



