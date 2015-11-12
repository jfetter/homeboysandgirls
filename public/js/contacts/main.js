'use strict';

var contact = {};

var selection = {};

$(document).ready(init);

function init() {
  console.log('in it');
  $("#add").on("click", addContact)
  //need to make the whole button clickable. 
  $("#cList").on("click", "i.fa-trash-o", selectToDelete)
 	$("#cList").on("click", "i.fa-pencil-square-o", selectToEdit)
 	$("#cList").on("click", ".doneEditing", sendEdits)
}

function addContact(){
	console.log("assembling contact")
	//assemble contact object

	contact.fname = $("#fname").val();
	contact.lname = $("#lname").val();
	contact.email = $("#email").val();
	contact.phone = $("#phone").val();
	contact.twitter = $("#twit").val();

//clear out all input fields. 
$('input').each(function(index, input) {
    $(input).val('');
  });
 		console.log("contact:" , contact);

  $.post('/contacts', contact)
  .done(function(data){
  	  console.log("post was done" , data)
    var $cRow = cRow(contact);
    $('#cList').append($cRow);
  })
  .fail(function(err){
    console.error(err);
  })
}

function cRow(contact){
	var $tr = $("<tr>");
	var $fname = $("<td>").addClass("tname").text(contact.tname)
	var $lname = $("<td>").addClass("lname").text(contact.lname)
	var $email = $("<td>").addClass("email").text(contact.email)
	var $phone = $("<td>").addClass("phone").text(contact.phone)
	var $twitter = $("<td>").addClass("twitter").text(contact.twitter)
 	var $edit = $("<button>").addClass("edit")
 	var $editPic = $("<i>").addClass("fa fa-pencil-square-o fa-lg").text("edit")
 	var $delete = $("<button>").addClass("delete")
 	var $trash = $("<i>").addClass("fa fa-trash-o fa-lg").text("trash")
	$edit.append($editPic);
	$delete.append($trash);

	$tr.append($fname, $lname, $email, $phone, $twitter, $edit, $delete)
	$("#cList").append($tr)
	return $tr; 
}


 function selectToEdit(){

  var thisRow = $(this).closest('tr')
  var rowIndex = thisRow.prevAll().length;
  selection.rowIndex = rowIndex;

  $(this).siblings().addClass("editing")
  $('.editing').replaceWith($("<input>"));
  $(this).text("Done Editing").addClass("doneEditing")

}

   function sendEdits (){
   	contact.fname = $(".editing").hasClass("#fname").val();
   	contact.fname = $(".editing").hasClass("#fname").val();
		contact.lname = $(".editing").hasClass("#lname").val();
		contact.email = $(".editing").hasClass("#email").val();
		contact.phone = $(".editing").hasClass("#phone").val();
		contact.twitter = $(".editing").hasClass("#twit").val();
    selection.newInfo = contact;
   console.log("selection", selection)

   $(".editing").removeClass;
    $.post('/contacts/edit', selection)
  .done(function(data){
  	  console.log("post was done" , data)
  })
  .fail(function(err){
    console.error(err);
  })
   }

  function updateList(){
  	
  }

  function selectToDelete (event){
   var thisRow = $(this).closest('tr')
   var rowIndex = thisRow.prevAll().length;
   thisRow.remove(); 
 		  $.post('/contacts/delete', rowIndex)
  .done(function(data){
  	  console.log("post was done" , data)
  })
  .fail(function(err){
    console.error(err);
  })

  }






