'use strict';

var contact = {};

$(document).ready(init);

function init() {
  console.log('in it');
  $("#add").on("click", addContact)
  $("#cList").on("click", "i.fa-trash-o", selectToDelete)
 	$("#cList").on("click", "i.fa-pencil-square-o", selectToEdit)
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
 	var $editPic = $("<i>").addClass("fa fa-pencil-square-o fa-lg")
 	var $delete = $("<button>").addClass("delete")
 	var $trash = $("<i>").addClass("fa fa-trash-o fa-lg")
	$edit.append($editPic);
	$delete.append($trash);

	$tr.append($fname, $lname, $email, $phone, $twitter, $edit, $delete)
	$("#cList").append($tr)
	return $tr; 
}

 // function editContact(event) {
	function editContact(event) {
  console.log("editing contacts")
  var oldInfo = selectToEdit();
  var newInfo ; 
  contact = {"newInfo": newInfo, "oldInfo": oldInfo()};
  $.post("/contacts/edit", contact)
   }

   function selectToEdit(){
   	var selection = {};
   	editLine = $(this).closest("tr");
		console.log("editLine", editLine);
	//selection.fName = editLine.children(":nth-of-type(1)").text();
  // eidtlName = editLine.children(":nth-of-type(2)").text();
  // editEmail = editLine.children(":nth-of-type(3)").text();
  // editPhone = editLine.children(":nth-of-type(4)").text();
  // editTwitter = editLine.children(":nth-of-type(5)").text();
  // console.log( editName);
  // $("#fname").val(editfname);
  // $("#lname").val(editlname)
  // $("#email").val(editEmail);
  // $("#phone").val(editPhone);
  // $("#twit").val(editTwitter);
  // $("input").addClass("editing")
  // deleteContact(editLine);
   }

  

  function selectToDelete (event){
 	//   if ($("input").hasClass("editing")){
  //   console.log("editLine")
  //   var $targetRow = editLine;
  //   console.log($targetRow)
  //   $("input").removeClass("remove");
  // } else {
  // console.log("Deleting an entry")
  // var $this = $(this);
  // console.log("$this: ", $this);
  // var $targetRow = $this.closest('tr');
  // console.log("$targetRow:" ,$targetRow)
  // }
  // var index = $targetRow.index();
  // contacts.splice(index, 1);
  // updateContacts();
 
  	return;
  }






