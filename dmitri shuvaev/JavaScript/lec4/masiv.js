var A = [ 12, 4, 3, 10, 1, 20 ];  
var B = [-3, -7, -100, -33];  
var c = A.concat(B);
for(var i=0;i<c.length;i++){
 document.write(" c["+i+"]"+"= "+c[i]); 
    if(i==5)document.write("<br/>");
}
