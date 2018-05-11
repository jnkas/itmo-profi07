
var student={
    name:"",
    lastname:"",
    age:"",
    interest:[],
    education_place:"",
    infor : function() {
      document.write(this.name + " " + this.lastname+" "+this.age+" год. ") ;
        document.write("Интересы: <br/>");
       for(i=0;i<this.interest.length;i++){
            document.write(this.interest[i]);
           if(i==this.interest.length-1)
         document.write(".");
           else document.write("<br/>");   
       }
        document.write("<br/>Учится в "+this.education_place+"."); 
        document.write("<br/>");   
    }
};
//только один обьект может быть создан
student.name="Иван";
student.lastname="Петров";
student.age=21;
student.interest.push("программирование");
student.interest.push("музыка");
student.interest.push("аниме");
student.education_place="ИТМО";
student.infor();
//
function Student(name,lastname,age,interest,education){
    this.name=name;
    this.lastname=lastname;
    this.age=age;
    this.interest=interest;
    this.education_place=education;
    
    this.print=function(){
      document.write("<hr>");   
      document.write(this.name + " " + this.lastname+" "+this.age+" год. ") ;       
        document.write("Интересы: <br/>");
       for(i=0;i<this.interest.length;i++){
            document.write(this.interest[i]);
           if(i==this.interest.length-1)
         document.write(".");
           else document.write("<br/>");   
       }
        document.write("<br/>Учится в "+this.education_place+".");
       document.write("<br/>");    
}//
    
};
var inter=[];
inter.push("программирование");
inter.push("путешествия");
var o=new Student("Olga","Ivanova","40",inter,"Moskow");
o.interest.push("рукоделие");
o.print();