
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthNamesRus = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
const days=["дня","день","дней"];
const hours=[" час "," часов "];
const mins=[" минут "," минута "];
//timer
var timerID = null;
var timerRunning = false;
function stopclock (){
        if(timerRunning)
                clearTimeout(timerID);
        timerRunning = false;
}

function startclock () {
     
        stopclock();
       setTime();
}
//

function counter(){
 var today = new Date();
  BigDay = new Date(today.getFullYear()+1, 0, 1);  

    //today.getFullYear() берет дату от сегодняшней
    //setFullYear устанавливает год текущий +1 2018 +1 те 2019
 
 msVden = 24 * 60 * 60 * 1000 ;//милисекунд в день
 timeLeft = (BigDay.getTime() - today.getTime());//разница от текущей даты до следующей
 _daysLeft = timeLeft / msVden;//осталось дней
 daysLeft = Math.floor(_daysLeft);//округленное кол дней
 _hrsLeft = (_daysLeft - daysLeft)*24;//часов 
 hrsLeft = Math.floor(_hrsLeft);
 minsLeft = Math.floor((_hrsLeft - hrsLeft)*60);//минут
  var result=Ndays(daysLeft,hrsLeft,minsLeft);

       result+=" до "+BigDay.getDate()+" "+monthNamesRus[BigDay.getMonth()]+" "+BigDay.getFullYear(); 
     return result;
}
//

function setTime(){
        timerID = setTimeout("setTime()",1000);
        timerRunning = true;
    document.Frame1.Xmas.value = counter();  
}
function Ndays( daysLeft,hrsLeft,minsLeft){
    var result=daysLeft+" ";
    result+=setDay(daysLeft);
    if(hrsLeft==1) result+=" "+hrsLeft+hours[0];
    else
    result+=" "+hrsLeft+hours[1];
    if(minsLeft==1)result+=minsLeft+mins[1];
    else
     result+=minsLeft+mins[0];   
return result;  
}
function setDay(daysLeft){
  
    var num=daysLeft%100;
        if(num==1)return days[1];
       else if(num>1&&num<5)return days[0];
       else if(num>4&&num<21)return days[2];
        num=num%10;
        if(num==1)return days[1];
       else if(num>1&&num<5)return days[0];
       else return days[2];
}


