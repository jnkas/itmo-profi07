var parol="c1aA^d3ga";
//
var re = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9].*?[0-9])(?=.*?[#?!@$%^&*-]).{9,})$");
//
if (re.test(parol)) {  
    document.write("valid");
} else {
     document.write("Invalid");
}







