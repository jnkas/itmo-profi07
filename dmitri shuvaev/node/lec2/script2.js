
function* generateSequence(l) {
  var index = 0;
  var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  while (index < l){
    var i = Math.floor(Math.random() * chars.length);
      index++;
        yield   chars.charAt(i); 
  }
  
}

function *password_generator(len){
 while(true){
    var re="";
    var gen = generateSequence(len);
   for(let value of gen){
      re+= value; 
    }

  yield re;
		}
}

console.log(password_generator(5).next().value);
console.log(password_generator(16).next().value);
console.log(password_generator(16).next().value);
const genp=password_generator(16);
console.log(genp.next().value);
console.log(genp.next().value);