

function recSum(n){
 
if(n==0)return 0;
else
    return n%10+recSum(parseInt(n/10));

}

document.write("<br/>"+"recursSum="+recSum(123));