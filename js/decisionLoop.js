var table = 7;
var arr = ['addition','subtraction','multiplication','division']
var operator = arr[Math.floor(Math.random() * 4)];
var num = 1;
var msg = '';

function calc() {
	if(operator === arr[0]) {
		while(num < 11) {
			msg = num + ' + ' + table + ' = ' + (num + table) + '<br/>';
			num++;
		}
	}else if(operator === arr[1]) {
		while(num < 11) {
			msg = num + ' - ' + table + ' = ' + (num - table) + '<br/>';
			num++;
		}
	}else if(operator === arr[2]) {
		while(num < 11) {
			msg = num + ' x ' + table + ' = ' + (num * table) + '<br/>';
			num++;
		}
	}else {
		while(num < 11) {
			msg = num + ' ÷ ' + table + ' = ' + (num / table) + '<br/>';
			num++;
		}
	}
	return msg;
}

calculate = document.getElementById('calc');
calculate.innerHTML = calc();