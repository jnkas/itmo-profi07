var numTarelk=10;
var moushSredstvo=1;
var i=0;
for(i;i<numTarelk;i++){
    if(moushSredstvo==0){
        document.write( " Моющее средство закончилось."+moushSredstvo+".Осталось "+(numTarelk-i)+" тарелок");
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
