var request = require('request');
var Contact = require("./models/contact")

Contact.find(function(err, contacts){
  if (err){
    console.log("error with find")
    return;
  }
  console.log("found contacts", contacts);
});



