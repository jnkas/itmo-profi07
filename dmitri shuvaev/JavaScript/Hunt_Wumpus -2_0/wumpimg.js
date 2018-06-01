   
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 500);
        };
      })();

      
var cvs1 = document.getElementById("canvas2");
var ctx1 = cvs1.getContext("2d");
var wump = new Image();


wump.src = "wump.jpg";
var X1 = 0;
var Y1 = 0;
var counter=0;
var requestId1;

function loop2(time) {
    requestId1 = undefined;

    ctx1.drawImage(wump,X1,Y1,600, 330);

    if(counter==cvs1.width){
        counter=0;
        stop1(); // stop the page
    }
      counter+=5;
  //start();
var loopTimer = setTimeout(start1,10);
}
function start1() {
    if (!requestId1) {

        requestAnimFrame(function(){
           loop2(1);   
        });
          requestId1 =true;        
        
        
      }
      
    
}

function stop1() {
   requestId1 =true;   
    if (requestId1) {
           
       window.cancelAnimationFrame(requestId1);
        //location.reload();
       requestId1 = undefined;
        var modal = document.getElementById('myModal2');
         modal.style.display = "none";

    }
}


