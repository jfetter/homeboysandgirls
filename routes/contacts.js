//routes

"use strict";
var express = require('express');
var router = express.Router();
var Contact = require("../models/contact")

//if the browser wants something
// or wants to give something from/to the
// app, it should be handled by an AJAX
// request in main.js
router.get("/", function(req, res){
	Contact.find(function(err, contacts){

		if (err) return res.status(400).send(err);
		res.render ("contacts", {items: contacts});
	});
	console.log("get route:" , contacts);
});

router.post("/edit", function(req, res){
	console.log("I'm in edit")
	// var rowIndex = req.body
	// console.log("I'm in delete")
	// Contact.delete(rowIndex, function(err){
	// 	res.status(err ? 404 : 200).send(err || "contact deleted");
 console.log("I'm in post.edit")
})

router.post("/delete", function(req, res){
	console.log(req.body)
	var rowIndex = req.body.rowIndex

	console.log("row index", rowIndex)
	Contact.delete(rowIndex, function(err){
		res.status(err ? 404 : 200).send(err || "contact deleted");
	})
})

//the js file wants to give info to the
// json data base... 
router.post("/", function(req, res){	
	var contact = req.body;
	console.log("in post route:", contact )
	Contact.create(contact, function(err){
		res.status( err ? 400 : 200).send(err || "contact created");
	})
});

module.exports  = router; 