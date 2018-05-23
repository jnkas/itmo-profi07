    var Course=function Course(cname){
            this.cursname=cname;
            this.ucitName;

            this.addUchitel=function(uchName){
                
                if(uchName instanceof Uchitel && this.ucitName==null){        
              this.ucitName=this.cloneSO(uchName);
                   
                }
                if(this.ucitName==null)this.ucitName=new Uchitel("defaultname");
                if(this.ucitName.name=="")this.ucitName.name="defaultname";
                if(this.ucitName.name!=""&&this.ucitName.name!="defaultname")alert("Учитель есть у группа для замены использ. replUchitel");
                if(this.ucitName.name=="defaultname" &&(uchName instanceof Uchitel )&& uchName.name!="")this.ucitName.name=uchName.name;
                       
        };
            this.printname1=function(){
              document.write(this.cursname+"<br/>"+"Учитель "+this.ucitName.printname());     
                this.ucitName.printgroup();
                  document.write("**********<br/>");
            };
        //
        this.replUchitel=function(newUcit){
            this.ucitName.name=newUcit;
        };
        //add uchenic
        this.addUchenick=function(newUchen){
            if(this.ucitName==null)this.ucitName=new Uchitel("defaultname");
            
            this.ucitName.addUchenik(newUchen);
        };
                this.deleteUchenick=function(name){
                if(this.ucitName!=null){
                    this.ucitName.deletUchenick(name);
                }
        };
        //
        this.cloneSO=function(obj) {
    //  null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = this.cloneSO(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = this.cloneSO(obj[attr]);
        }
        return copy;
    }
    }

   // 
};  
  //=======================================      
    function Uchitel(name){
            this.name=name;
            this.uchenic=[];
        //
            this.printgroup=function(){
     for(var i=0;i<this.uchenic.length;i++)
     document.write("Ученик "+this.uchenic[i].printname()+"<br/>");   
    };
        //
            this.printname=function(){
             return this.name+"<br/>";   
            };
        this.addUchenik=function(uchName){
           this.uchenic.push(new Uchenick(uchName)); 
        }
        this.deletUchenick=function(uchName){
           for(var i = 0;i<this.uchenic.length;i++) {
          if(this.uchenic[i].name === uchName) {
             this.uchenic.splice(i, 1);
          }
      }
        }
            
        };
//==========================================
    var Uchenick=function(name){
            this.name=name;

            this.printname=function(){
            return this.name;   
            };
            
        };
var c1=new Course('Web programming');
var u1=new Uchitel("");
var uch1=new Uchenick("Ivan");
u1.addUchenik("John");
u1.addUchenik("Howdy");
c1.addUchitel(u1);
c1.printname1();


c1.addUchenick("Petrov");
//c1.printname1();
c1.replUchitel("Genadiy");
c1.deleteUchenick("Howdy");
//u1.printgroup();
//var u2=new Uchitel("Bit");
//c1.addUchitel(u2);
c1.printname1();