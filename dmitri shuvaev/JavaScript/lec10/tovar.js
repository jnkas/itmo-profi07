var Tovar=function(name,price){
  this._name=name;
  this._price=price;
    this.info=function(){return "Имя товара "+this._name+"<br/> Цена "+this._price;}
    this.getPrice=function(){return this._price;}
}

function Korsina_tovarov(){
    this.store=[];
    this._kolichestvo=0;
    this._summ=0;
    this.add=function(n,p){
        if(typeof n === 'string'&& typeof p === 'number'){
        this.store.push(new Tovar(n,p));
        this._kolichestvo++;
        this._summ+=p;    
        }

    };//====================
    this.addTovar=function(o)
    {
     if(o instanceof Tovar){
           this.store.push(o);
           this._kolichestvo++;
           this._summ+=o.getPrice();   
     }else alert('not Tovar object');
   
    };//====================
    this.getSumm=function(){

        return "Сумма "+this._summ;
    };
        this.getKolichestvo=function(){

        return "Количество "+this._kolichestvo;
    };
    this.printStore=function(){
     for(var i=0;i<this._kolichestvo;i++)
     document.write(this.store[i].info()+"<br/>");   
    };
}
var tovar1=new Tovar("TV",100);
var tovar2=new Tovar("book",50.50);
var st1=new Korsina_tovarov();
st1.addTovar(tovar1);
st1.addTovar(tovar2);
st1.addTovar("tovar1");
st1.printStore();
document.write(st1.getSumm()+"<br/>"+st1.getKolichestvo());
    //===================
function Korsina(){
    this.store=[];  
    //===================
    this.Tovar=function(name,price)
    {
     this._name=name;
     this._price=price;
     this.info=function(){return "Имя товара "+this._name+"<br/> Цена "+this._price;}
     this.getPrice=function(){return this._price;}
    };
    //====================
    this.addTovar=function(name,price)
    {
     var t=new this.Tovar(name,price);
        this.store.push(t);
    
    };//====================
        this.printStore=function(){
     for(var i=0;i<this.store.length;i++)
     document.write(this.store[i].info()+"<br/>");   
    };
}
document.write("<br/>******************<br/>");
var kors=new Korsina();
kors.addTovar("name",111);
kors.addTovar("table",200);
kors.addTovar("apple",158);
kors.printStore();