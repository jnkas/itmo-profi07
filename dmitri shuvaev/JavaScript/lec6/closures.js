

function makeRandom() {
  var arr=[];

  return function() {
   var random;
   var uniqueflag;
   var i, j;
  let len=arr.length;
 var constNum=100;
    if(len<constNum){
       // 
       
    
       do {
       
        uniqueflag = 1;
        random = Math.floor((Math.random() * constNum) + 1);
      
        for (j = 0; j < len && uniqueflag == 1; j++) 
         {
           if (arr[j] == random) 
           {
              uniqueflag = 0;
           }
         }
         } while (uniqueflag != 1);
     arr.push(random);


    return random;
    }else {
        alert("maximum range!!!");
        return 0;
    }
  };

};
let r=makeRandom();
  document.write("<br/><hr>") ;
for(var k=0;k<100;k++)
document.write(r()+"<br/>");

