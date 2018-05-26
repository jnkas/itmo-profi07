;/*
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


//Задание 3

var x = parseInt (prompt ('введите цифру'));

if (x < 0 || x > 9) {
	alert ('это не цифра')
}
if (x === 0) {
	alert ('нуль')
}
if (x === 1) {
	alert ('единица')
}
if (x === 2) {
	alert ('два')
}
if (x === 3) {
	alert ('три')
}
if (x === 4) {
	alert ('четыре')
}
if (x === 5) {
	alert ('пять')
}
if (x === 6) {
	alert ('шесть')
}
if (x === 7) {
	alert ('семь')
}
if (x === 8) {
	alert ('восемь')
}
if (x === 9) {
	alert ('девять')
}


//Задание 4

var x = parseInt (prompt ('введите оценку'));

if (x < 1 || x > 5) {
	alert ('это не оценка')
}
if (x === 1) {
	alert ('плохо')
}
if (x === 2) {
	alert ('неудовлетворительно')
}
if (x === 3) {
	alert ('уловлетворительно')
}
if (x === 4) {
	alert ('хорошо')
}
if (x === 5) {
	alert ('отлично')
}


//Задание 5

var a = parseInt (prompt ('первое число'));
var b = parseInt (prompt ('второе число'));
var c = parseInt (prompt ('третье число'));
var flag = false

if (a === b || b === c || c === a) {
	flag = true
}

alert (flag)


//__________________________________________________________________
//Блок 2 
//Задание 1

var x = prompt ('x');
var y = prompt ('y');
var subx = x 

if (y < x) {
	x = y
	y = subx
}

alert ('теперь x = ' + x + ', а y = ' + y)


//Задание 2

var x1 = parseInt (prompt ('x1'));
var y1 = parseInt (prompt ('y1'));
var z1 = parseInt (prompt ('z1'));

var x2 = parseInt (prompt ('x2'));
var y2 = parseInt (prompt ('y2'));
var z2 = parseInt (prompt ('z2'));

var x3 = parseInt (prompt ('x3'));
var y3 = parseInt (prompt ('y3'));
var z3 = parseInt (prompt ('z3'));

var ab2 = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2);
var bc2 = Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2) + Math.pow(z3 - z2, 2);
var ca2 = Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2) + Math.pow(z1 - z3, 2);

if ((ab2 === (bc2 + ca2)) || (bc2 === (ca2 + ab2)) || (ca2 === (ab2 + bc2))) {
		alert ('треугольник прямой');
} else {
	alert ('треугольник не прямой')
}


//Задание 3

var x = parseInt (prompt ('введите месяц от 1 до 12'));

if (x < 1 || x > 12) {
	alert ('это не месяц')
}
if (x >= 3 && x <= 5) {
	alert ('весна')
}
if (x >= 6 && x <= 8) {
	alert ('лето')
}
if (x >= 9 && x <= 11) {
	alert ('осень')
}
if (x === 12 || x === 1 || x === 2) {
	alert ('зима')
}


//Задание 4
var unit = parseInt (prompt ('номер единицы длины'));
var len = parseFloat (prompt ('длина отрезка'));

if (unit === 1) {
	lenm = 0.1 * len
}
if (unit === 2) {
	lenm = 1000 * len
}
if (unit === 3) {
	lenm = len
}
if (unit === 4) {
	lenm = 0.001 * len
}
if (unit === 5) {
	lenm = 0.01 * len
}

alert (lenm)


//Задание 5

var init1 = prompt ('введите строку');//исходная строка
var init = init1.toLowerCase();//исходная строка на строчных буквах
var str = '';//строка без лишних символов
var odd = ' .,:;!@#&()–[{}]?/*\'\"\\';//лишние символы

for (var i = 1; i <= init.length; i++) {
	var symb = init.charAt(i - 1);
	var flag = true;
	for (var j = 1; j <= odd.length; j++) {
		if (symb === odd.charAt(j - 1)) {
			flag = false;// если i-й символ из строки равен одному из лишних символов, флаг меняется на false 
		}
	}
	if (flag) {// если флаг false - не прибавляем лишний символ к строке
		str = str + init.charAt(i - 1);
	}
	
}

var pal = ''

for (var i = 1; i <= str.length; i++) {
	pal = pal + str.charAt(str.length - i);
}

if (str === pal) {
	alert('это палиндром');
} else {
	alert('это не палиндром');
}


//Задание 6

var year = parseInt (prompt ('год'));

if (year % 4 === 0) {
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			alert('високосный');
		}
		else {
			alert('не високосный');
		}
	}	
	else {
		alert('високосный')
	}
} 
else {
	alert('не високосный')
}


//Задание 7

var plate = parseInt (prompt ('количество тарелок'));
var soap = parseFloat (prompt ('количество моющего средства'));
var soapleft = soap
var plateleft = plate

//почему i++ выполняется до проверки условия??? 

for (var i = 1; i <= plate && soapleft >= 0; i++) {
	plateleft = plate - i + 1//Количество оставшихся тарелок
	if (soapleft < 0.5 && plateleft > 0) {
		alert ('Моющее средство закончилось. Осталось ' + plateleft + ' тарелок')
	}
	soapleft = soapleft - 0.5
}
if (soapleft === 0) {
		alert ('Все тарелки вымыты, моющее средство закончилось')
	}
if (soapleft > 0) {
		alert ('Все тарелки вымыты. Осталось ' + soapleft + ' ед. моющего средства')
	}


//__________________________________________________________________
//Блок 3
//Задание 1


//__________________________________________________________________
//Блок 4
//Задание 1

var A = [12, 4, 3, 10, 1, 20];
var B = [-3, -7, -100, -33];

var C = A.concat(B);

alert(C);


//Задание 2

var area = [ null, null, null, null, null, null, null, null, null ];

for (var i = 0; i <= area.length - 1; i++) {
	if (area[i] === null) {
		var cage = document.getElementById('' + i);
		cage.innerHTML = '';
	}
	if (area[i] === 0) {
		var cage = document.getElementById('' + i);
		cage.innerHTML = 'O';
	}
	if (area[i] === 1) {
		var cage = document.getElementById('' + i);
		cage.innerHTML = 'X';
	}
}


//Задание 3

var A = [12, 4, 3, 10, 1, 20];
var min = A[0];
var max = A[0];

for (var i = 0; i <= A.length - 1; i++) {
	if (A[i] < min) {
		min = A[i];
	}
	if (A[i] > max) {
		max = A[i];
	}
}

alert('min = ' + min + ', ' + 'max = ' + max);


//Задание 4

//Сортировка вставкой - находим минимальный элемент в массиве, добавляем его в новый на первое место,
//а в изначальном массиве - удаляем элемент (для запуска поиска нового минимального), добавляем 
//минимальный на второе, и т.д.

var A = [12, 4, 3, 10, 1, 20];
var B = [];

//Блок ниже для поиска максимального элемента нужен для начала сравнения, чтобы сравнивать с ним все 
//остальные элементы, т.к. любой из них будет меньше.

max = A[0];
for (var i = 0; i <= A.length - 1; i++) {
		if (A[i] > max) {
			max = A[i];
		}
	}

for (var j = 0; j <= A.length - 1; j++) {

	var min = max;
	var minI;
	for (var i = 0; i <= A.length - 1; i++) {
		if (A[i] < min) {
			min = A[i];
			minI = i;
		}
	}

	B[j] = min;
	delete A[minI];
}

alert(B);

*/
//__________________________________________________________________
//Блок 5
//Задание 1

var


/*
все, что ниж++- мусор


var ab = Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2),1/2);
var bc = Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2),1/2);
var ca = Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2),1/2);

if (Math.pow(ab, 2) === (Math.pow(bc, 2) + Math.pow(ca, 2)) ||
	Math.pow(bc, 2) === (Math.pow(ca, 2) + Math.pow(ab, 2)) ||
	Math.pow(ca, 2) === (Math.pow(ab, 2) + Math.pow(bc, 2))) {
		alert ('треугольник прямой');
} else {
	alert ('треугольник не прямой')
}




var arr =[1,5,8,3,0,3,888,44,72,82,9]

z = false //z - упорядоченность
while (z === false)
	for (var j = 0; j < arr.length - 1; j++) {
		if (arr[j] < arr[j+1])
			
			var z = true
	}


	for (var i = 0; i < arr.length - 1; i++) {
		var a = arr[i]
		var b = arr[i+1]
		if (arr[i+1] < arr[i])
			arr[i] = b
			arr[i+1] = a
	}

	
	
	
alert (arr)



str.split('').reverse().join(',')

for (начальное условие; условие; изменение счетчика) {

}
for ()
	if (arr [i] > max) {
		max = arr[i]
	}
*/

