'use strict';

$(document).ready(init);

function init() {
  console.log('in it');
  $("#submit").on("click", addContact)
  $("#cList").on("click", "i.fa-trash-o", deleteContact)
 	$("#cList").on("click", "i.fa-pencil-square-o", editContact)
}

function addContact(){
	console.log("assembling contact")
	//assemble contact object
	var contact = {};
	contact.fname = $("#fname").val();
	contact.lname = $("#lname").val();
	contact.email = $("#email").val();
	contact.phone = $("#phone").val();
	contact.twitter = $("#twitter").val();
//clear out all input fields. 

// $('input').each(function(index, input) {
//     $(input).val('');
//   });
		console.log("contact:" ,contact);


	$.post("/contacts", contact)
		.done(function(data){
			var $cRow = cRow(contact);
			$("#cList").append($cRow);
		})
		.fail(function(err){
			console.error(err);
		});
	}

function cRow(contact){
	var $tr = $("<tr>");
	var $tname = $("<td>").addClass("tname").text(clog.tname)
	var $lname = $("<td>").addClass("lname").text(clog.lname)
	var $email = $("<td>").addClass("email").text(clog.email)
	var $phone = $("<td>").addClass("phone").text(clog.phone)
	var $twitter = $("<td>").addClass("twitter").text(clog.twitter)
 	var $edit = $("<button>").addClass("edit")
 	var $editPic = $("<i>").addClass("fa fa-pencil-square-o fa-lg")
 	var $delete = $("<button>").addClass("delete")
 	var $trash = $("<i>").addClass("fa fa-trash-o fa-lg")
	$edit.append($editPic);
	$delete.append($trash);

	$tr.append($fname, $lname, $email, $phone, $twitter, $edit, $delete)

	return $tr; 
}


 function editContact(event) {
 		return;
 }

 function deleteContact(event){
 	return;
 }



