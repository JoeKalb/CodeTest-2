/* Answers for jquery questions */
// Making the first word bold
$(".jquery").each(function(){
	var change = $(this);
	change.html(change.html().replace(/^(\w+)/, '<span>$1</span>'));
	$("span").css("font-weight", "Bold");
});
// Making a click and double click event
$(".click").click(function() {
	$(".click").append("<p>This is a click event</p>");
});
$(".click").dblclick(function() {
	$(".click").append("<p>This is a double-click event</p>");
});
// Changing background color when the button is clicked
$(".colorChange").click(function() {
	$(".colorDiv").css("background-color", "blue");
});