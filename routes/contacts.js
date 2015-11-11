//routes

"use strict";

app.get("/", function(req, res){
	console.log("in the route")
	res.send("I'm going to send you contact info \n")
})

module.exports  = router; 