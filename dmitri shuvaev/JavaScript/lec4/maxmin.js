var arr=[12,4,3,10,1,20];
function findMin(arr){

 var len=arr.length;
    var indx=0;
 for(var i =1;i<len;i++)  
  {
    if(arr[i]<arr[indx])
    {
    indx=i;
    }
  }

return indx;
}
function findMax(arr){

 var len=arr.length;
    var indx=0;
 for(var i =1;i<len;i++)  
  {
    if(arr[i]>arr[indx])
    {
    indx=i;
    }
  }

return indx;
}
function deleteFromArray(array){
  var remain = new Array();
   var minindex=findMin(array); 
   var maxindex=findMax(array);
  for(var i=0;i<array.length;i++){
    if(i == minindex||i==maxindex){
      continue;
    }
    remain.push(array[i]);
  }
  return remain;
}


document.write(arr.length);
document.write("<br/>");
arr=deleteFromArray(arr);
document.write(arr);
document.write("<br/>");document.write(arr.length);

