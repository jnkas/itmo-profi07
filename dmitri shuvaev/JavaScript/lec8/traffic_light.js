/*
(function() {
   'use strict';

   var d=document,r=d.getElementById('Red'),
       o=d.getElementById('Yellow'),
       g=d.getElementById('Green'),c=0,
       timer=1000,
       delay1=2, 
       delay2=4, 
       delay3=6, 
       delay4=8, 
       delay5=10; 
var timerNum=d.getElementById('timer-num');
  // r.style.backgroundColor = "red";

    var timeCount=1;

function trafficLights(){

 timerNum.innerHTML =  timeCount++;

if(c>=delay1) {
    r.style.backgroundColor ='red';
   o.style.backgroundColor ='black';
    g.style.backgroundColor ='black';
        timeCount=1;
    timerNum.innerHTML =  timeCount;

 }
if(c>=delay2) {
   r.style.backgroundColor ='red';
   o.style.backgroundColor ='yellow';
   g.style.backgroundColor ='black';
        timeCount=1;
    timerNum.innerHTML =  timeCount;

 }
if(c>=delay3) {
   r.style.backgroundColor ='black'; 
   o.style.backgroundColor ='yellow';
   g.style.backgroundColor ='black';
     timeCount=1;
    timerNum.innerHTML =  timeCount;
  
    
 }
if(c>=delay4) {
   r.style.backgroundColor ='black';
   o.style.backgroundColor ='black';
   g.style.backgroundColor ='green';
        timeCount=1;
    timerNum.innerHTML =  timeCount;

 }
if(c>=delay4) {
   c=0;
      timeCount=1; 
       timerNum.innerHTML =  timeCount;
  
 }
   c++; 
 }
   setInterval(trafficLights,timer);
})();
*/
f = function(){

     var d=document,r=d.getElementById('Red'),
       o=d.getElementById('Yellow'),
       g=d.getElementById('Green');
    var timerNum=d.getElementById('timer-num');
   
    var gOn = new isOn();
    var yOn = new isOn();
    var rOn = new isOn();

    // Set Timer
     var redTimer = 2; // Time For Red Light
    var yelTimer = 2;// Time For Yellow Light
    var greTimer = 2;// Time For Green Light
    
    var totalTime = greTimer + yelTimer + redTimer;
    var timeCount = greTimer;
        
    if(greTimer && yelTimer && redTimer){
        var i = 0;
        var intr = setInterval(function(){
            if(i <= greTimer){
                if(rOn.getOn()){
                    timeCount = greTimer;
                }
        
                yOn.setOn(false);
                rOn.setOn(false);
                gOn.setOn(true);
            
                timerNum.innerHTML = timeCount--;
                // Green Light Turn On
          
           r.style.backgroundColor ='black';
           o.style.backgroundColor ='black';
           g.style.backgroundColor ='green'; 
                
            }else if(i > greTimer-1 && i <= greTimer + yelTimer+1){
                if(gOn.getOn()){
                    timeCount = yelTimer;
                }
        
                gOn.setOn(false);
                rOn.setOn(false);
                yOn.setOn(true);
            
                timerNum.innerHTML = timeCount--;
                
                // Yellow Light Turn On
             
       r.style.backgroundColor ='black'; 
       o.style.backgroundColor ='yellow';
       g.style.backgroundColor ='black';
            }else{
                if(yOn.getOn()){
                    timeCount = redTimer;
                }
        
                gOn.setOn(false);
                yOn.setOn(false);
                rOn.setOn(true);
            
                timerNum.innerHTML = timeCount--;
                        
                // Red Light Turn On
          
     r.style.backgroundColor ='red';
     o.style.backgroundColor ='black';
     g.style.backgroundColor ='black';
            }
            i++;
            // If Done, Repeat
   
            if(i-1 >= totalTime+2)
                i = 0;
        }, 1000); 
    }else{
        alert("error, don't input 0")
    }
    // Update Every 1 seconds

}

// Helper
var isOn = function(){
    this.on = false;
    this.setOn = function(b){
        this.on = b;
    }
    this.getOn = function(){
        return this.on;
    }
}
f();