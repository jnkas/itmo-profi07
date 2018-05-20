document.onkeydown=function(event){
var key_press=String.fromCharCode(event.keyCode);
    var key_code=event.keyCode;
    document.getElementById('write').innerHTML=key_press;
  alert(key_press);
}
var mouseDown = function() {
     let text=this.innerText;
    
    if(flag){
      document.getElementById('write').value+=text.toUpperCase();   
    }else
        {
        document.getElementById('write').value+=text;      
        }
/*
    if (event.target.nodeName == "LI") {
      //console.log("Clicked", event.target.textContent);
     event.target.style.backgroundColor="red";
    } 
*/
      console.log(this.innerText);

      this.style.backgroundColor = "red"; 
    
};
var mouseUp = function() {
   this.style.backgroundColor = "#fff";

};
var spaceAdd=function(){
  document.getElementById('write').value+=" "; 
    this.style.backgroundColor = "red"; 
}
//tab
var tabAdd=function(){
  document.getElementById('write').value+="    "; 
    this.style.backgroundColor = "red"; 
}
//
//return
var returnAdd=function(){
  previousWord('write');
    this.style.backgroundColor = "red"; 
}
function previousWord(id) {
  var field = document.getElementById(id);

      if(field.selectionStart)
    {
      var startPos = field.selectionStart;
      var endPos = field.selectionEnd;

      if(field.selectionStart == field.selectionEnd)
      {
        field.value = field.value.substring(0, startPos - 1) + field.value.substring(endPos, field.value.length);

        field.focus(); 
        field.setSelectionRange(startPos - 1, startPos - 1); 
      }
      else
      {
        field.value = field.value.substring(0, startPos) + field.value.substring(endPos, field.value.length);

        field.focus(); 
        field.setSelectionRange(startPos, startPos); 
      }

    }
}

//
var flag=false;
var capslockAdd=function(){
  
    if(!flag){
     this.style.backgroundColor = "red";
        this.style.color="yellow";
      flag=true;
        
    }else  
    {
     this.style.backgroundColor = "white";
     this.style.color="black";
     flag=false;
    } 
}
//
var deleteText=function() {
     this.style.backgroundColor = "red"; 
var selectedElemnt = document.getElementById("write");
var selectedText = selectedElemnt.value;
var newText = selectedText.substr(0, selectedElemnt.selectionStart) + selectedText.substr(selectedElemnt.selectionEnd);
selectedElemnt.value = newText;
}

//=============================================
function addEvents(){
    var classname = document.getElementsByClassName("letter");
    var classname1 = document.getElementsByClassName("symbol");
 for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('mousedown', mouseDown, false);
    classname[i].addEventListener('mouseup', mouseUp, false);
}
//
     for (var i = 0; i < classname1.length; i++) {
    classname1[i].addEventListener('mousedown', mouseDown, false);
    classname1[i].addEventListener('mouseup', mouseUp, false);
}
      var classname2 = document.getElementsByClassName("space")[0];
    classname2.addEventListener('mousedown', spaceAdd, false);
    classname2.addEventListener('mouseup', mouseUp, false);
    //event tab
          var classname3 = document.getElementsByClassName("tab")[0];
    classname3.addEventListener('mousedown', tabAdd, false);
    classname3.addEventListener('mouseup', mouseUp, false);
        //event tab
    var classname4 = document.getElementsByClassName("return")[0];
    classname4.addEventListener('mousedown', returnAdd, false);
    classname4.addEventListener('mouseup', mouseUp, false);
    //capslock
        var classname5 = document.getElementsByClassName("capslock")[0];
    classname5.addEventListener('click', capslockAdd, false);
    //
    var classname6 = document.getElementsByClassName("delete")[0];
    classname6.addEventListener('mousedown', deleteText, false);
    classname6.addEventListener('mouseup', mouseUp, false);
}
addEvents();
