function User(){
    this.name="Аноним";
 this.toString = function(){
 return this.name;
}
}
User.human=function (o){
    var user = new User(); 
    user.name=o.name;
    user.age=o.age;
 user.toString = function(){
 return "Имя "+this.name+"<br/> Возраст: "+this.age;
}
 return user;
}
var u = new User();
u.name="Олег";
u.age="23";

var text= document.getElementById("h2");

var u1 = new User.human(u);
var u2 = new User();
document.write(u2);
text.innerHTML=u1;