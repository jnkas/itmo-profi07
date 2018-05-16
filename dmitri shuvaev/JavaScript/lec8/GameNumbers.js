var arr = [];
var size;
function randNm(){
while(arr.length < (size*size)){
  var randomnumber=Math.ceil(Math.random()*size*size);
  if(arr.indexOf(randomnumber) === -1){arr.push(randomnumber);
                                     break;}  
}
    return randomnumber;

}
function randColors(){
    function r() { return Math.floor(Math.random() * 255) };

var color = 'rgb(' + r() + "," + r() + "," + r() + ')';
    return color;
}
function randFontSize(){

    var fonts=Math.floor((Math.random() * 60)+30)+'px' ;
    return fonts;
}
function addTab(divel){
    
 size=parseInt(prompt("Ener num of rows"));
  var table = document.createElement('TABLE');
   table.border = '1';
   table.style.borderCollapse= "collapse";
    
for(var i=0;i<size;i++){
        var tr = document.createElement('TR');
        table.appendChild(tr);
    for(var k=0;k<size;k++){
      var td = document.createElement('TD');
        td.appendChild(document.createTextNode(randNm()));
        td.style.textAlign='center';
        td.style.color=randColors();
        td.style.padding='5px';
        td.style.fontSize = randFontSize();
          tr.appendChild(td);
    }
   
}  
    divel.appendChild(table); 
}
addTab( document.getElementById("container"));
