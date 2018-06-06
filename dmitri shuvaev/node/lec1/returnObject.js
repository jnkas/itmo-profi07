function isArray(arr) {
  return arr instanceof Array;
}
function returnObj(f,...args){
    
   return function (){
    var res = f.apply(this, arguments);
    var obj = new Object();
     if(isArray(res)){
   

         for(var i=0;i<args.length;i++){
          obj[args[i]] = res[i];
         }

          return  obj; 
      
     }  
    }
}
function func(){
	return [1, 2];
}
function func2(){
	return ['Python', 'is', 'programming language'];
}

let r=returnObj(func,'one','two');
document.write(r().one);document.write('<br/>');
document.write(r().two);
document.write('<br/>');
r = returnObj (func2, 'a', 'b', 'c');
document.write(r().a);document.write('<br/>');
document.write(r().b);
document.write(r().c);
