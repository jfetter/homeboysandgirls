"use strict"

$(document).ready(init);
	function init(){

		$("#add").on("click", addClog())
		$("#clogList").on("click", "i.delete", deleteClog);
		//$("#clogList").on("click", "i.edit", editClog);
}

function deleteClog(e){
	console.log(e.target);
}

function addClog(){
	var clog = {};
	clog.name = $("input#name").val();
	clog.cost = $("input#cost").val();
	clog.material = $("input#material").val();
	clog.quality = $("input#quality").val();

$("input").each(function(index, input){
	$(input).val("");
})

$.post("/clogs", clog)
	.done(function(data){
		console.log("data", data);
	})
		.fail(function(err){
			console.log(err);
		})
}

function clogRow(clog){
	var $tr = $("<tr>");
	var $name = $("<td>").addClass("name").text(clog.name)
	var $cost = $("<td>").addClass("cost").text(clog.cost)
	var $material = $("<td>").addClass("material").text(clog.material)
	$tr.append($name, $cost, $material, $quality);
	return $tr; 
}

