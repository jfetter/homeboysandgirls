var request = require('request');
var Contact = require("./models/contact")

Contact.find(function(err, contacts){
  if (err){
    console.log("error with find")
    return;
  }
  console.log("found contacts", contacts);
});

// myFunc(function(err, data){
//   if(err){
//     console.log('ERROR:', err);
//   } else {
//     console.log('DATA:', data);
//   }
// });



// function myFunc(callback){
//   request.get('/routes/contacts', function(err, data){
//     callback(err, data);
//   })
  //request.get('/contacts/', cb);

  // var num = Math.floor(Math.random() * 5);

  // if(num === 0){
  //   cb("OMG IT'S AN ERROR");
  // } else {
  //   cb(null, [1,2,3,4])
  // }


