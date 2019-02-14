$(document).ready(function() {
	$("#click").click(function() {
		$("#animInside").slideToggle("slow");
	});
	
	$("body").hide();
	$("body").fadeIn(1000);
});