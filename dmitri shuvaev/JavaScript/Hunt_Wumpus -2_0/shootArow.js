   
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 500);
        };
      })();

      
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var arow = new Image();


arow.src = "arow.jpg";
var X = -200;
var Y = 50;
/*
function draw(){
    
    ctx.drawImage(arow,X,Y,300, 100);

    requestAnimationFrame(draw);
    if(X==cvs.width)location.reload(); // reload the page
X+=2;
}
*/
var requestId;

function loop(time) {
    requestId = undefined;

    ctx.drawImage(arow,X,Y,300, 100);

    if(X==cvs.width){
         X=0;
        stop(); // stop the page
    }
      X+=4;
  //start();
var loopTimer = setTimeout(start,10);
}
function start() {
    if (!requestId) {

      //window.requestAnimationFrame(loop);
        requestAnimFrame(function(){
           loop(1);   
        });
          requestId =true;        
        
        
      }
      
    
}

function stop() {
   requestId =true;   
    if (requestId) {
             X = -100;
       window.cancelAnimationFrame(requestId);
        //location.reload();
       requestId = undefined;
        var modal = document.getElementById('myModal');
         modal.style.display = "none";
    
           //alert("sotp");
    }
}

