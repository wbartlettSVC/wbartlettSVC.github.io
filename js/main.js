function main() {
	var timeHours = new Date().getHours();
	var message;

	if(timeHours < 11) {
		message = "Good Morning.";
	}
	else if(timeHours >= 11 || timeHours <= 17) {
		message = "Good Afternoon.";
	}
	else {
		message = "Good Evening.";
	}
document.getElementById("message").innerHTML = "My First JavaScript";
}
