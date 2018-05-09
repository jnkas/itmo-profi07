/*
var student={
    name:"",
    lastname:"",
    age:"",
    interest:[],
    education_place:""
};
только один обьект может быть создан
*/
function Student(name,lastname,age,interest,education){
    this.name=name;
    this.lastname=lastname;
    this.age=age;
    this.interest=interest;
    this.education_place=education;
}
var inter=[];
inter.push("программирование");
inter.push("путешествия");
var o=new Student("Olga","Ivanova","40",inter,"Moskow");
o.interest.push("рукоделие");

function print(o){

   document.write("<br/>"+o.name+"<br/>"+o.lastname+"<br/>"+o.age+"<br/>"); 
    for(i=0;i<o.interest.length;i++)
    document.write("интерес"+(i+1)+":"+o.interest[i]+"<br/>");
    document.write(o.education_place+"<br/>");
    
}
print(o);