$("body").click(function() {
	filter();
});
$("body").keypress(function() {
	filter();
});
$("body").keydown(function() {
	filter();
});
$("body").keyup(function() {
	filter();
});

var filter = function() {
	$("#filter > li").filter(":even").css("background-color", "grey");
	$("#filter > li").filter(":odd").css("background-color", "green");
	$filter = $("#filterText").val();
	$("#filter > li").css("display", "block");
	$("#filter > li:not(:contains("+$filter+"))").css("display", "none");
};