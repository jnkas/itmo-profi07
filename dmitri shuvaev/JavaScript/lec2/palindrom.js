function Palindrome(str) {

  var word = str.replace(/[^A-Z0-9А-ЯЁа-яё]/ig, "").toLowerCase();

    var len = word.length;

    for (var i = 0; i < len / 2; i++) {
	
        if (word.charAt(i) !== word.charAt(len - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (Palindrome("Сел в озере березов лесz")) {
	
    document.write("это строка палиндром");
} else {
    document.write("это строка не палиндром");
}