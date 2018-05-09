var a=[1,2,3,4];
var b=[2,3,4,5,1,2];

function concatArr(a,b){
    var res=[];
    var alen=a.length;
    var blen=b.length;
  for (var i=0; i <alen; i++) {
    res.push(a[i]);
}    
 for (var i=0; i <blen; i++) {
   if(isTrue(a,b[i]))
    res.push(b[i]);
} 
    return res;
}
//проверка на совпадение
function isTrue(ar1,value){
    len=ar1.length;
    for(i=0;i<len;i++){
        if(ar1[i]===value)return false;
    }
    return true;
}
//

function printar(arr){
    var len=arr.length;
  for(var i=0;i<len;i++){
      document.write("["+i+"]="+arr[i]+"<br/>");
  }
}
var c=concatArr(a,b);



printar(c);