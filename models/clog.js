'use strict';


var db = 'db/clogs.json';
var fs = require('fs');

var Clog = {};

Clog.find = function(cb) {
  fs.readFile(db, function(err, data){
    if(err) return cb(err);
    var clogs = JSON.parse(data);
    cb(null, clogs);
  });
};

Clog.create = function(clog, cb) {
  Clog.find(function(err, clogs){
    //it'll already be parsed in the prev
    // function that is why it doesnt need to
    // be parsed here. 
    clogs.push(clog);
    var data = JSON.stringify(clogs);
    fs.writeFile(db, data, function(err) {
      cb(err || null);
    });
  });
};

module.exports = Clog; 