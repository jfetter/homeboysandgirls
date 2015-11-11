//routes

"use strict";
var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	console.log("in route")
	res.send("I'm going to send you contact info \n")
})

module.exports  = router; 