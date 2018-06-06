function pausef(f, ms) {

  return function(...args) {
 
    setTimeout(function() {
      f.apply(this, args);
    }, ms);
  };

}
function func() {
  alert("Функция выполниться с задержкой в 2 секунды!");
}
let pause=pausef(func, 2000);
//pause();
