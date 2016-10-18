/* Answering JavaScript questions */
/* Question 1 */
var answer1 = "1. Today is "; // Create the answer
var date = new Date(); // Get todays date
var currentDay = date.getDay(); // Get the number of the day of the week
// match the number with the days
var days = [
	'Sunday', 
	'Monday', 
	'Tuesday', 
	'Wednesday', 
	'Thursday', 
	'Friday', 
	'Saturday'
];
for (var i = 0; i < days.length; i++) {
	if (currentDay === i) {
		currentDay = days[i];
	}
}
// append current day
answer1 += currentDay + '. ';
// get the hour
var hour = date.getHours();
if (hour <= 12) {
	hour = hour.toString() + ' AM';
} else {
	hour = (hour - 12).toString() + ' PM';
}
// append current hour
answer1 += "The current time is " + hour;
// get the minutes
var minutes = date.getMinutes();
// append
answer1 += " : " + minutes;
// get seconds
var seconds = date.getSeconds();
// append
answer1 += " : " + seconds;
// final answer
document.getElementById("question1").innerHTML = answer1;

/* Question 2 */
var answer2 = "2. Origin Code Academy Rocks! ";
var len = answer2.length; // total length of the string
document.getElementById("question2").innerHTML = answer2; // connect the string to the html
var timing = setInterval(myTimer, 1000); // set the timing
// giving the timer a function
function myTimer() {
	var last = answer2.charAt(len - 1); // getting the last character of the string
	var rest = answer2.substring(0, len - 1); // getting the rest of the string
	answer2 = last + rest; // giving the html the new value
	document.getElementById("question2").innerHTML = answer2;
}

/* Question 3 */
var answer3 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("Before sorting: " + answer3);
// bubble sorting
var swapped; // defining boolean
do { // do-while loop
	swapped = false; // do this while the swapped function stays false
	for (var j = 0; j < answer3.length - 1; j++) {
		if (answer3[j] < answer3[j+1]) { // if the first number is smaller than the second
			var smaller = answer3[j]; // set smaller number
			answer3[j] = answer3[j+1]; // put larger number in the first place 
			answer3[j+1] = smaller; // put the smaller number in the second place
			swapped = true; // set swapped to true to leave the do-while loop
		}
	}
} while (swapped); 
console.log("After sorting: " + answer3); 

