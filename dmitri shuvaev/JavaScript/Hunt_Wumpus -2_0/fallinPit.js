   
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 500);
        };
      })();

      
var cavs = document.getElementById("canvas3");
var contx = cavs.getContext("2d");
var bgr = new Image();
var player = new Image();


player.src = "man.png";
bgr.src = "pitbg.jpg";
var Xv = cavs.width/2-30;
var Yv = 0;

var requestIdn;

function mloop(time) {
    requestIdn = undefined;
    contx.drawImage(bgr,0,0);
    contx.drawImage(player,Xv,Yv,42, 64);

    if(Yv==cavs.height){
         Yv=0;
         stopg(); // stop the page
    }
      Yv+=2;

var loopTimerv = setTimeout(startg,10);
}
function startg() {
    if (!requestIdn) {

      //window.requestAnimationFrame(loop);
        requestAnimFrame(function(){
           mloop(1);   
        });
          requestIdn =true;        
        
        
      }
      
    
}

function stopg() {
   requestIdn =true;   
    if (requestIdn) {
             Yv = 0;
       window.cancelAnimationFrame(requestIdn);
        //location.reload();
       requestIdn = undefined;
        var modal = document.getElementById('myModal3');
         modal.style.display = "none";
    
           //alert("sotp");
    }
}
