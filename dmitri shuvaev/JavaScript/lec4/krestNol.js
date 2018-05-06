var view = {

   displayX: function(location) {
        var cell = document.getElementById(location);
         cell.setAttribute("class", "X");
   },
   displayZero: function(location) {
         var cell = document.getElementById(location);
        cell.setAttribute("class", "Z");
   }
};

var area = 
[ 1, null, 0, null, 1, null, null, null, null ];
var len=area.length;

var Krest=["00", "01", "02" ,     
           "10", "11", "12" ,      
           "20", "21", "22"];

function print(){
    for(var i=0;i<len;i++){
        if(area[i]==0){view.displayZero(Krest[i]); }
        else if(area[i]==1){view.displayX(Krest[i]); }
    }
}



function displayXZ(n){
    var index = Krest.indexOf(n);

    if(area[index]==0){view.displayZero(n); }
      else if(area[index]==1){view.displayX(n);} 
}




