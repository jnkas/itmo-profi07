
function fibbonaci(n){
    if(n<2)return 1;

    return fibbonaci(n - 1) + fibbonaci(n - 2);
}
function printFibon(n){
 for(var i=0;i<n;i++)
  document.write(fibbonaci(i)+" ,");   
}

printFibon(8);