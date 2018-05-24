function Chelovek(name,age,gender,interests){
  this._name=name;
  this._age=age;
  this._gender=gender;
  this._interests=interests;
this.prinint=function(){
    var inter="";
    for(var i=0;i<this._interests.length;i++){
        inter+=this._interests[i]+"<br/>";
    }
    return inter;
};
     
}
    Chelovek.prototype.toString=function(){return "Человек: "+this._name+"<br/> Возраст: "+this._age+" лет <br/>Пол: "+this._gender+"<br/>Интересы: <br/>"+this.prinint();
        ;}
//
var Student=function(name,age,gender,interests,institut){
   this._institut=institut; 
  Chelovek.call(this,name,age,gender,interests);

}
      Student.prototype.toString=function(){
          return "Студент: "+this._name+"<br/> Возраст: "+this._age+" лет <br/>Пол: "+this._gender+"<br/>Интересы: <br/>"+this.prinint()+
              "Обучается в "+this._institut;
                          }  
var a=[];
a.push("музыка");
a.push("программирование");
st=new Student("Иван",21,"м",a,"ИТМО");
document.write("<br/>*****************<br/>");
document.write(st);