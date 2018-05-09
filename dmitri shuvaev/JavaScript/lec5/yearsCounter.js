
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
        // Make sure the clock is stopped
        stopclock();
       setTime();
}
//

function counter(){
 today = new Date();
 BigDay = new Date("January 1, 2019");   
   // BigDay.setDate(1);
   //BigDay.setMonth(0);
    BigDay.setFullYear(today.getFullYear()+1);//текущий год + 1 
    
 msVden = 24 * 60 * 60 * 1000 ;//милисекунд в день
 timeLeft = (BigDay.getTime() - today.getTime());//разница от текущей даты до следующей
 _daysLeft = timeLeft / msVden;//осталось дней
 daysLeft = Math.floor(_daysLeft);//округленное кол дней
 _hrsLeft = (_daysLeft - daysLeft)*24;//часов 
 hrsLeft = Math.floor(_hrsLeft);
 minsLeft = Math.floor((_hrsLeft - hrsLeft)*60);//минут
  var result=""+daysLeft+" ";
    
    if(daysLeft>1&&daysLeft<5)result+=days[0];
     else if(daysLeft==1||daysLeft==31)result+=days[1];
     else result+=days[2];
    if(hrsLeft==1) result+=" "+hrsLeft+hours[0];
    else
    result+=" "+hrsLeft+hours[1];
    if(minsLeft==1)result+=minsLeft+mins[1];
    else
     result+=minsLeft+mins[0];   


     result+=" до "+BigDay.getDate()+" "+monthNamesRus[BigDay.getMonth()]+" "+BigDay.getFullYear(); 
  
     return result;
}
//"January 1, 2019"

function setTime(){
        timerID = setTimeout("setTime()",1000);
        timerRunning = true;
    document.Frame1.Xmas.value = counter();  
}

