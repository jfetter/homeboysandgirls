'use strict';

$(document).ready(init);

function init() {
  console.log('Hello jQuery!');
  $(".form").on("click", test)
}

function test(){
	$(".form").append("<div>").css("background-color", "red")
}