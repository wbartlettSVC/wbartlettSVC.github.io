var table = Math.floor((Math.random() * 40) + 1);
var arr = ['addition','subtraction','multiplication','division']
var operator = arr[Math.floor(Math.random() * 4)];
var num = 1;
var numF = Math.floor(Math.random() * 21);
var msg = '';

function calc() {
	if(operator === arr[0]) {
		while(num < numF) {
			msg = num + ' + ' + table + ' = ' + (num + table) + '<br/>';
			num++;
		}
	}else if(operator === arr[1]) {
		while(num < numF) {
			msg = num + ' - ' + table + ' = ' + (num - table) + '<br/>';
			num++;
		}
	}else if(operator === arr[2]) {
		while(num < numF) {
			msg = num + ' x ' + table + ' = ' + (num * table) + '<br/>';
			num++;
		}
	}else {
		while(num < numF) {
			msg = num + ' / ' + table + ' = ' + (num / table) + '<br/>';
			num++;
		}
	}
	return msg;
}

calculate = document.getElementById('calc');
calculate.innerHTML = calc();