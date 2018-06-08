
function randChar(){
     var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
      var i = Math.floor(Math.random() * chars.length);
      return chars.charAt(i);  
}
function* generateSequence( end) {
  for (let i = 0; i < end; i++) {
    yield randChar();
  }
}
function password_generator(len){
 var re="";
for(let code of generateSequence(len))
re+=code; 
    return re;
}

console.log(password_generator(16));
