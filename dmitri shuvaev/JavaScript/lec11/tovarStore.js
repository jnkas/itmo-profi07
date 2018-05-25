var Tovar=function(name,price){
  this._name=name;
  this._price=price;
}
   Tovar.prototype.getPrice=function(){return this._price;}
   Tovar.prototype.info=function(){return "Имя товара "+this._name+"<br/> Цена "+this._price;}
   Korsina_tovarov.prototype.addTovar=function(o)
    {
     if(o instanceof Tovar){
           this.store.push(o);
           this._kolichestvo++;
           this._summ+=o.getPrice();   
     }else alert('not Tovar object');
   
    };
    Korsina_tovarov.prototype.getSumm=function(){

        return "Сумма "+this._summ;
    };
    Korsina_tovarov.prototype.getKolichestvo=function(){

        return "Количество "+this._kolichestvo;
    };
    Korsina_tovarov.prototype.printStore=function(){
     for(var i=0;i<this._kolichestvo;i++)
     document.write(this.store[i].info()+"<br/>");   
    };
//====================  
function Korsina_tovarov(){
    this.store=[];
    this._kolichestvo=0;
    this._summ=0;
//====================
}
var tovar1=new Tovar("TV",100);
var tovar2=new Tovar("book",50.50);
var st1=new Korsina_tovarov();
st1.addTovar(tovar1);
st1.addTovar(tovar2);
st1.printStore();
document.write(st1.getSumm()+"<br/>"+st1.getKolichestvo());
