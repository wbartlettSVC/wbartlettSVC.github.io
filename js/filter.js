$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

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
	$filter = $("#filterText").val();
	$("#filter > li").css("display", "block");
	$("#filter > li:not(:contains("+$filter+"))").css("display", "none");
	$("#filter > li").filter(":even").css("background-color", "grey");
	$("#filter > li").filter(":odd").css("background-color", "green");
};