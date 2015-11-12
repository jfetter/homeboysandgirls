'use strict';

$(document).ready(init);

function init() {
  console.log('Hello jQuery!');
  $("#add").on("submit", test)
}

function test(){
	var input = {input: $("#input").val()};
	console.log(input)
	//back out of this file and go into routes sp. contacts
	// and hand off the test input
	$.post("../routes/contacts.js", input, function(data){
		console.log(data);

	})

}

function test2(){
	console.log("testing now")
	$("th").append("<tr>").text(test)
}



