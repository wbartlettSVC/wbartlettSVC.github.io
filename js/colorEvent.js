function myFunc() {
	var col1 = document.getElementsByClassName('color')[0].value;
	var col2 = document.getElementsByClassName('color')[1].value;
	document.getElementById('container').style.background = 'linear-gradient(' + col1 + ', ' + col2 + ')';
}