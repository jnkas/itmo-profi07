var numTarelk=10;
var moushSredstvo=0.8;
var i=0;
for(i;i<numTarelk;i++){
if(moushSredstvo==0 || moushSredstvo-0.5<0){
        document.write( " Моющее средство закончилось."+Number((moushSredstvo).toFixed(1))+".Осталось "+(numTarelk-i)+" тарелок");
        break;
    }

       moushSredstvo-=0.5;

}
      if(i==numTarelk && moushSredstvo!=0){
    document.write("Все тарелки вымыты. Осталось "+moushSredstvo+" моющего средства"); 
   
    }
     else if(i==numTarelk && moushSredstvo==0){
    document.write("Все тарелки вымыты, моющее средство закончилось"); 
   
    }  
