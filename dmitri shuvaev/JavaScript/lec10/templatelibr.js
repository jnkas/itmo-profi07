var elem = null;
var myWindow;
 //var w3 = document.getElementById("w1");
//window.location="index.html";
function openWin() {
    myWindow = window.open("", "myWindow", "width=200, height=100");   // открывает новое окно
  myWindow.document.write("<p>This window's name is: " + myWindow.name + "</p>");//myWindow.name отображает имя нового окна
      myWindow.opener.document.getElementById("w2").innerHTML="<p>This is the source window!</p>";//Window opener записывает текст в исходное окно.
}
function closeWin() {
    myWindow.close();//закрывает текущее окно
}
function resizeWin() {
    myWindow.resizeTo(250, 250);                             // изменяет размер нового окна
    myWindow.focus(); // устанавливает фокус на новое окно
   // confirm("message");//показывает сообщение с 2-мя кнопками. Возвращает true или false
}
function moveWin() {
    myWindow.moveTo(500, 100);//сдвинуть новое окно 
    myWindow.focus();
    var frames = window.frames; // or // var frames = window.parent.frames;возвращает window, которое подобно массиву, перечисляя обьекты  <frame>'или <iframe>
for (var i = 0; i < frames.length; i++) { 
  // do something with each subframe as frames[i]
  frames[i].document.body.style.background = "red";
}
    //
    var intFrameHeight = window.innerHeight; // высота в пикселях включая горизонтальную прокрутку
    alert("высота в пикселях включая горизонтальную прокрутку "+intFrameHeight);
}



function initElement()
{
  elem = document.getElementById("foo");
  // NOTE: doEvent(); or doEvent(param); will NOT work here.
  // Must be a reference to a function name, not a function call.
  elem.onblur = doEvent;//onblur событие для обьекта для его вызова нужно кликнут на inputtext затем кликнуть снаружи
};

function doEvent()
{
  elem.value = 'Bye-Bye';
  console.log("onblur Event detected!")
}
  initElement();
var buffer = new ArrayBuffer(8);//Конструктор ArrayBuffer создает новый ArrayBuffer установленного в байтах размера.
buffer[0]=1;buffer[1]=3;
var view   = new Int32Array(buffer);

document.write(view.buffer[0]+" "+view.buffer[1]);
var debug = {hello: "world"};//Blob() constructor позволяет создавать blob-ы из других объектов. Например, чтобы сконструировать blob из строки:
var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
document.write(blob);
//
function showType(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    var name = files[i].name;
    var type = files[i].type;//file.type возвращает данные о типе файла файловым обьектом
    alert("Filename: " + name + " , Type: " + type);
  }
}