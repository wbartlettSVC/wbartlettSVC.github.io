// (function() {
	// var pwd = document.getElementById('pwd');
	// var chk = document.getElementById('showPwd');
	
	// addEvent(chk, 'change', function(e) {
		// var target = e.target || e.srcElement;
		// try {
			// if(target.checked) { 
				// pwd.type = 'text';
			// }else {
				// pwd.type = 'password';
			// }
		// } catch(error) {
			// alert('This browser cannot switch type');
		// }
	// });
// }); ///--From Book

$(document).ready(function() {
	$("#showPwd").click(function() {
		if($("#pwd").prop('type') == 'password') {
			$("#pwd").prop('type', 'text');
		}
		else {
			$("#pwd").prop('type', 'password');
		}
	});
});