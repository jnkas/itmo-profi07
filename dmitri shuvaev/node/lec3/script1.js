/*
1*. Напишите функцию getFreeLand, которая принимает 
два аргумента, оба из которых массивы:
- первый массив: площадь садового участка в сотках и соотношение сторон
- второй массив: ширину и длину одной грядки в метрах.
Функция разбивает грядки на участке и возвращает количество 
незанятого места в квадратных метрах.
1 сотка - это квадрат земли площадью 100м2.
В случаи ошибок нужно выбросить исключение типа Error с сообщеним:
"Не задана площадь участка"
"Не задана площадь грядки"
"Размер грядки больше размера участка"
Тестовый набор данных №1
Входные данные
[100, '1:1']
[15, 25]
Выходные данные
250
Тестовый набор данных №2
Входные данные
[0, '1:1']
[15, 25]
Выходные данные
Error:Не задана площадь участка
Тестовый набор данных №3
Входные данные
[100, '1:1']
[5, 0]
Выходные данные
Error:Не задана площадь грядки
Тестовый набор данных №4
Входные данные
[6, '3:2']
[40, 28]
Выходные данные
Error:Размер грядки больше размера участка
*/

function getFreeLand(ar1,ar2){
    if(ar1 instanceof Array && ar2 instanceof Array){
      if(typeof ar1[1] !== 'string')throw "Error not a string"; 
    
    if(ar1[0]==0)throw "Error:Не задана площадь участка";
    else if(ar2[0]==0||ar2[1]==0)throw "Error:Не задана площадь грядки";
 var area=ar1[0]*100;
      var width, height, widthGradka, heightGradka;
  var s=ar1[1]; 
    var res = s.split(":");
        if(res.length == 1)throw "Error argument must be var:var";
        if(isNaN(res[0])||isNaN(res[1])||res[0]==0||res[1]==0)throw "Error argument not num must be var:var";
      
for (var i=0; i<res.length; i++)
{
    res[i] = parseInt(res[i], 10);
}
  var l=Math.sqrt(area/(res[0]*res[1]));
    if(res[0]>res[1]){
       width=l*res[0];
        height=l*res[1];
    }else{
        width=l*res[1]; 
        height=l*res[0];
    }
   var areaGradra=ar2[0]*ar2[1];
  
    if(area<areaGradra)throw "Площадь грядки больше участка";
   
if(ar2[0]>ar2[1]){
  widthGradka=ar2[0];
  heightGradka=ar2[1];     
    }else{
  widthGradka=ar2[1];
  heightGradka=ar2[0];     
    }
    if(widthGradka>width)throw "Ширина грядки больше ширины участка "+widthGradka+">"+width;
    else if(heightGradka>height)throw "Длина грядки больше длины участка "+heightGradka+">"+height;
   

var numGradk=areaGradra*(Math.floor(area/areaGradra));

    return area-numGradk;
    }//isaray
    else throw "Error not aray not corect argument";
}//getKFreeLand

function cal(){
 try{
     console.log(getFreeLand([100, '1:1'],[15, 25]));
 } catch(err){
     console.log(err);
 } 
     try{
     console.log(getFreeLand([0, '1:1'],[15, 25]));
 } catch(err){
     console.log(err);
 } 
     try{
     console.log(getFreeLand([100, '1:1'],[5, 0]));
 } catch(err){
     console.log(err);
 } 
     try{
     console.log(getFreeLand([6, '3:2'],[40, 28]));
 } catch(err){
     console.log(err);
 } 
     try{
     console.log(getFreeLand([100, '3:'],[40, 28]));
 } catch(err){
     console.log(err);
 }
     try{
     console.log(getFreeLand(1,2));
 } catch(err){
     console.log(err);
 } 
}
cal();
