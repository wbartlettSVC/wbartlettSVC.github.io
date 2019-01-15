var msg, today, ends;

function offerExpires(today) {
	var laterWeek, day, date, month, year, dNames, mNames;
	
	laterWeek = new Date(today.getTime() + 604800000);
	
	dNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	mNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	day = dNames[laterWeek.getDay()];
	date = laterWeek.getDate();
	month = mNames[laterWeek.getMonth()];
	year = laterWeek.getFullYear();
	
	msg = 'This deal will expire ' + day + '<br/>(' + date + ' ' + month + ' ' + year + ')';
	
	return msg;
}

today = new Date();
ends = document.getElementById('expire');
ends.innerHTML = offerExpires(today);