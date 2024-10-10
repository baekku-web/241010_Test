$(document).ready(function(){
	$("#top>button").click(function(){
		console.log( $(this).text() );
		$("#layout>nav").slideToggle();
		if( $(this).text()=="close" ){
			$(this).text("menu");
		} else {
			$(this).text("close");
		}
	});
	
	$("a").click(function(){
		$("#layout>nav").slideUp();
	});
});///////////////////////전체끝!