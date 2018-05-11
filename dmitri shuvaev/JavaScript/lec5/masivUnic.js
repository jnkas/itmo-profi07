var a=[1,2,2];
var b=[2,3,1,5,2];

function concatArr(a,b)
{
    var arr = a.concat(b);
    n=arr.length;
   for(var i=0;i<n;i++)
   {
    for(var j=i+1;j<n;)
    {
        if(arr[i]===arr[j])
        {

             arr.splice(j,1);
     
            n--;
        }
        else
            j++;
    }
   }
    return arr;
}

//

function printar(arr){
    var len=arr.length;
  for(var i=0;i<len;i++){
      document.write("["+i+"]="+arr[i]+"<br/>");
  }
    document.write("<br/>");
}
var c=concatArr(a,b);

printar(c);