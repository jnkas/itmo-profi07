function chelovek(name,age,gender,interests){
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
    
    this.toString=function(){return "Человек: "+this._name+"<br/> Возраст: "+this._age+" лет <br/>Пол: "+this._gender+"<br/>Интересы: <br/>"+this.prinint();
        ;}
  
}

//
var student=function(name,age,gender,interests,institut){
   this._institut=institut; 
  chelovek.call(this,name,age,gender,interests);
      this.toString=function(){
          return "Студент: "+this._name+"<br/> Возраст: "+this._age+" лет <br/>Пол: "+this._gender+"<br/>Интересы: <br/>"+this.prinint()+
              "Обучается в "+this._institut;
                          }  
}
var a=[];
a.push("музыка");
a.push("программирование");
st=new student("Иван",21,"м",a,"ИТМО");
var text= document.getElementById("h1");
text.innerHTML=st;
