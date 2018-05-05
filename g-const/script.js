/*
//Блок 1
//Задание 1

var x = parseInt (prompt ('первое число'));
var y = parseInt (prompt ('второе число'));
var z = parseInt (prompt ('третье число'));

var min = x
var count = 'первое'

if (y < x) {
	min = y
	count = 'второе'
}	

if (z < y) {
	min = z
	count = 'третье'
}

alert ( count + ' число минимальное и равняется ' + min ); 

*/
//Задание 2

var x = parseInt (prompt ('введите число'));

if (x < -999 || x > 999) {
	alert ('число вне диапазона')
}
if (x === 0) {
	alert ('нулевое число')
}
else {
	var str = ''
	if (x < 0) {
		str = str + 'отрицательное '
	}
	if (x > 0) {
		str = str + 'положительное '
	}
	if (Math.abs(x) < 10) {
		str = str + 'однозначное '
	}
	if (Math.abs(x) > 9 && Math.abs(x) < 100) {
		str = str + 'двузначное '
	}
	if (Math.abs(x) > 99 && Math.abs(x) < 1000) {
		str = str + 'трехзначное '
	}
	alert (str + 'число')
}
/*
*/


