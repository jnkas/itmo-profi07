   
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 500);
        };
      })();

      
var cvs4 = document.getElementById("canvas4");
var ctx4 = cvs4.getContext("2d");
var winimg = new Image();


winimg.src = "gotwump.jpg";
var X4 = 0;
var Y4 = 0;
var counter4=0;
var requestId4;

function loop4(time) {
    requestId4 = undefined;

    ctx4.drawImage(winimg,X4,Y4,600, 349);

    if(counter4==cvs4.width){
        counter4=0;
        stop4(); // stop the page
    }
      counter4+=5;
  //start();
var loopTimer = setTimeout(start4,10);
}
function start4() {
    if (!requestId4) {

        requestAnimFrame(function(){
           loop4(1);   
        });
          requestId4 =true;        
        
        
      }
      
    
}

function stop4() {
   requestId4 =true;   
    if (requestId4) {
           
       window.cancelAnimationFrame(requestId4);
        //location.reload();
       requestId4 = undefined;
        var modal = document.getElementById('myModal4');
         modal.style.display = "none";

    }
}
