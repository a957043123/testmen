$(document).ready( function() {
	$("#win").fadeOut("fast");
	$("#location").click(function(){
		$("#win").fadeIn("slow");
	});
	$("#close").click(function(){
		$("#win").fadeOut("slow");
	});
});