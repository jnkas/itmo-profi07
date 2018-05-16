
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
        showtime();
}

function showtime () {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
    //
               var yesterday = new Date();
            yesterday.setMilliseconds(0);
            yesterday.setSeconds(0);
            yesterday.setMinutes(0);
            yesterday.setHours(0);
            var dateDifference = now - yesterday;  
    //
    var hoursText=document.querySelector('.hours');
    var clockText = document.querySelector('.back');
    var minutesText=document.querySelector('.minutes');
    var secondesText=document.querySelector('.secondes');
    var backDiv = document.querySelector('.back');
   
  
          var clockColor = Math.round(seconds/240000);
       // clockText.style.color = 'hsl(' + clockColor + ',100%,50%)';  
    
    
        var hoursValue = "" + ((hours < 10 ) ? "0" : "") + hours;
        // var timeValue = "" + ((hours >12) ? hours -12 :hours)
      var  minutesValue = ((minutes < 10) ? ":0" : ":") + minutes;
     var   secondsValue = ((seconds < 10) ? ":0" : ":") + seconds;
     //
       hoursText.innerHTML=hoursValue;
       minutesText.innerHTML=minutesValue;
       secondesText.innerHTML=secondsValue;
         var rgbValueHours = Math.round(hours * 11.13);
            // 4.339 comes from 256/59 with 256 being the max value 
            // of a rgb value and 59 for the max value of the variable
            // minutes/seconds
            var rgbValueMinutes = Math.round(minutes * 4.339);
            var rgbValueSeconds = Math.round(seconds * 4.339); 
            //colors
            hoursText.style.color="yellow";
            minutesText.style.color="lightblue";
            var clockColor = Math.round(dateDifference/240000);
             secondesText.style.color = 'hsl(' + clockColor + ',100%,50%)';
         
        
            backDiv.style.background = 'rgb(' + rgbValueHours + ',' + rgbValueMinutes +
                ',' + rgbValueSeconds + ')';

 



        timerID = setTimeout("showtime()",1000);

        timerRunning = true;
}
startclock();
