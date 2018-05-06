var parol="3Ab^6b6d8";
//
var re = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=(.*[0-9]){3})(?=.*?[#?!@$%^&*-]).{9,})$");
//
if (re.test(parol)) {  
    document.write("valid");
} else {
     document.write("Invalid");
}







