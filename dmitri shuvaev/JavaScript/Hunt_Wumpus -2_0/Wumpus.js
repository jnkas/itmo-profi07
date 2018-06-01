var ArRomms = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var GameBoard=function(){
  this.Rooms=[];  
  this.addRooms=function(room){
      this.Rooms.push(room);
  };
this.printRooms=function(i){
return (this.Rooms[i].base+", "+this.Rooms[i].left+", "+this.Rooms[i].front+", "+this.Rooms[i].right+"<br/>");   
};
  
}
var Point=function(base,left,front,right,id){
    this.base=base;
    this.left=left;
    this.front=front;
    this.right=right;
    this.id=id;
};  
var board;

var points=[];
function initpoints(){
points.push(new Point(ArRomms[0],ArRomms[19],ArRomms[2],ArRomms[18],"r0"));
points.push(new Point(ArRomms[1],ArRomms[5],ArRomms[18],ArRomms[17],"r1"));
points.push(new Point(ArRomms[2],ArRomms[4],ArRomms[17],ArRomms[0],"r2"));
points.push(new Point(ArRomms[3],ArRomms[19],ArRomms[16],ArRomms[7],"r3"));
points.push(new Point(ArRomms[4],ArRomms[2],ArRomms[15],ArRomms[6],"r4"));
points.push(new Point(ArRomms[5],ArRomms[1],ArRomms[14],ArRomms[9],"r5"));
points.push(new Point(ArRomms[6],ArRomms[8],ArRomms[13],ArRomms[4],"r6"));
points.push(new Point(ArRomms[7],ArRomms[3],ArRomms[12],ArRomms[11],"r7"));
points.push(new Point(ArRomms[8],ArRomms[6],ArRomms[11],ArRomms[10],"r8"));
points.push(new Point(ArRomms[9],ArRomms[13],ArRomms[10],ArRomms[5],"r9"));
points.push(new Point(ArRomms[10],ArRomms[12],ArRomms[9],ArRomms[8],"r10"));
points.push(new Point(ArRomms[11],ArRomms[7],ArRomms[8],ArRomms[15],"r11"));
points.push(new Point(ArRomms[12],ArRomms[10],ArRomms[7],ArRomms[14],"r12"));
points.push(new Point(ArRomms[13],ArRomms[17],ArRomms[6],ArRomms[9],"r13"));
points.push(new Point(ArRomms[14],ArRomms[16],ArRomms[5],ArRomms[12],"r14"));
points.push(new Point(ArRomms[15],ArRomms[11],ArRomms[4],ArRomms[19],"r15"));
points.push(new Point(ArRomms[16],ArRomms[14],ArRomms[3],ArRomms[18],"r16"));
points.push(new Point(ArRomms[17],ArRomms[1],ArRomms[2],ArRomms[13],"r17"));
points.push(new Point(ArRomms[18],ArRomms[0],ArRomms[1],ArRomms[16],"r18"));
points.push(new Point(ArRomms[19],ArRomms[15],ArRomms[0],ArRomms[3],"r19"));
}
function initrooms(){
for(var d=0;d<points.length;d++){
 board.addRooms(points[d]);   
}
}

//constants variables
var curpos;

var wumpuspos;
var batspos;
var pitspos;
var numArows=5;
var noarow=false;
var batMovpl=false;
var extraArow=getRandomInt(0,19);
var arowFound=false;
var isAlive=true;
//==========
function lostArow(){
    while(extraArow==pitspos.base||(curpos.base==extraArow)){
       extraArow=getRandomInt(0,19);     
    }
}

//
function batsWumpcheckpos(){
   while(wumpuspos.base==batspos.base||(wumpuspos.base==pitspos.base)||(wumpuspos.base==curpos.base)||(curpos.base==batspos.base)){
      wumpuspos=board.Rooms[getRandomInt(0,19)]; 
       //alert(wumpuspos.base);
    }
}
function batsHear(){
    if(curpos.left==batspos.base|| curpos.front==batspos.base||curpos.right==batspos.base){
    return true;
    }else return false;
}
function wumpsSmell(){
    if(curpos.left==wumpuspos.base|| curpos.front==wumpuspos.base||curpos.right==wumpuspos.base){
        return true;
    }else{
        return false;
    }
}
function pitsNear(){
    if(curpos.left==pitspos.base|| curpos.front==pitspos.base||curpos.right==pitspos.base){
        return true;
    }else{
        return false;
    }
}
function fallpit(){
    if(curpos.base==pitspos.base){
     document.getElementById("message").value="fall in pit!\n" ; 
        showp();
         isAlive=false;
    }
}
function batSnatch(){
    if(curpos.base==batspos.base){
     batMovpl=true;
        batmove();
        batRepos();
     
    }
}
function wumpEatenYou(){
    if(curpos.base==wumpuspos.base){
 document.getElementById("message").value="Wumpus eaten you Game Over!\n" ;
        show();
         isAlive=false;
    }
}
function  batmove(){
    let bpos=getRandomInt(0,19);
    while(bpos==curpos.base){
      bpos=getRandomInt(0,19);  
    }
       for (var i=0;i<board.Rooms.length;i++) {
    if( board.Rooms[i].base==bpos ){
        curpos=board.Rooms[i];
        break;
    }
    }
  
}
function batRepos(){
    let bpos=getRandomInt(0,19);
    while(bpos==batspos.base){
      bpos=getRandomInt(0,19);  
    }
    batspos=board.Rooms[bpos];
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function showWin()
 {
 var modal = document.getElementById('myModal4');
 modal.style.display = "block";
 loop4(2);   
 }
function shoot(dir) {
    if(isAlive){
    if(numArows<1){ document.getElementById("message").value="No arows!\n";noarow=true;}
    else{          
  
          numArows--;
          setNumArows(numArows);
        if(dir=="left"){
            arowpos=curpos.left; 
           modal.style.display = "block";  
           loop(5);  
        }
        else if(dir=="front"){
            arowpos=curpos.front;
            modal.style.display = "block";  
           loop(5);  
        }
        else if(dir=="right"){
            arowpos=curpos.right;
           modal.style.display = "block";  
           loop(5);  
        }
          if(arowpos==wumpuspos.base){
            modal.style.display = "block";  
           loop(5); 
        setTimeout(function(){
        showWin();
    }, 2000);
         
        document.getElementById("message").value+="You got the wumpus!\n";    
    }else{
      if(curpos.base==wumpuspos.left||curpos.base==wumpuspos.front||curpos.base==wumpuspos.right ){
          moveWumpus(); 
          document.getElementById("message").value+=wumpuspos.base+"You miss!\n";
      }else{
          document.getElementById("message").value+=wumpuspos.base+"You miss! No wumpus near!\n";  
      }
     
      
    } 
      if(numArows<1){noarow=true; 
       document.getElementById("message").value="No arows!\n";
                    }  
    }
    }
}
function addArow(){
    if(arowFound==false){
       if(extraArow==curpos.base){
           numArows++; 
           arowFound=true;
        document.getElementById("message").value+="You found arrow!\n"; 
           setNumArows(numArows);
       }
    } 
}

function show()
 {
 var modal = document.getElementById('myModal2');
 modal.style.display = "block";
 loop2(2);   
 }

function showp(){
    var modal = document.getElementById('myModal3');
    modal.style.display = "block";
    mloop(2);   
}
   function setwumpos(pos){
         for (var i=0;i<board.Rooms.length;i++) {
    if( board.Rooms[i].base==pos ){
        wumpuspos=board.Rooms[i];
         break;
    }
    }
  }     
function moveWumpus(){

    let indx=getRandomInt(0,2); 
       if(indx==0){
           
      setwumpos(wumpuspos.left);
    }
    else if(indx==1){
      setwumpos(wumpuspos.front);
    }
    else{
      setwumpos(wumpuspos.right);
    }
   if(wumpuspos.base==curpos.base){  document.getElementById("message").value="Wumpus eaten you Game Over!\n";  
                                       show();
                                   isAlive=false;
                                  }
}

//
function deleteStile(){
var x = document.getElementsByClassName("r");

var i;
for (i = 0; i < x.length; i++) {
    x[i].classList.remove('sBlue');
     x[i].classList.remove('sYellow');
   var new_element = x[i].cloneNode(true);
x[i].parentNode.replaceChild(new_element, x[i]);
}

}
function updateMessage(){  
    let bat="";
    let wump="";
    let pitnear="";
     let movepl="";
    if(wumpsSmell()){wump="I smell the wumpus\n";}
    if(batsHear()){bat="BATS NEARBY!\n";}
    if(batMovpl){ movepl="ZAP—SUPER BAT SNATCH! ELSEWHEREVILLE FOR YOU!\n" ;
                    }
    if(pitsNear()){pitnear="I FEEL A BREEZE\n";}
    document.getElementById("message").value=wump+bat+movepl+pitnear+"YOU ARE IN ROOM   "+curpos.base+"\nTUNNELS LEAD TO "+curpos.left+" "+curpos.front+" "+curpos.right+"\n"+batspos.base+" "+wumpuspos.base+" "+pitspos.base+extraArow;
   
                        }
function setCurrPos(o) {
    deleteStile();

curpos=board.Rooms[o];
        batSnatch();

findValue();
    batsHear();
  updateMessage();
      fallpit();
     wumpEatenYou();
}
//
function init(){
    var temp;
    points.splice(0,points.length)
    board=new GameBoard();
     deleteStile();  
  ArRomms=shuffle(ArRomms);
  initpoints();
    
    initrooms();
    curpos=board.Rooms[0];

wumpuspos=board.Rooms[getRandomInt(0,19)];
batspos=board.Rooms[getRandomInt(0,19)];
pitspos=board.Rooms[getRandomInt(0,19)];
numArows=5;
noarow=false;
batMovpl=false;
extraArow=getRandomInt(0,19);
arowFound=false;
isAlive=true;
    for(var k=0;k<board.Rooms.length;k++){
       temp=document.getElementById(board.Rooms[k].id);
        temp.innerHTML=board.Rooms[k].base;
    }
    batsWumpcheckpos();
updateMessage();
  setNumArows(numArows);
     lostArow();
findValue();
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//update arows
function setNumArows(num){
    let temp=document.getElementById("narowlabel"); 
    temp.innerHTML = num;
}
function findValue(){
   var divs = document.getElementsByClassName("r");
          for (let st of divs) {
    if( st.innerHTML==curpos.base ){
     var Classes = st.className;
    var NewClass = Classes+" sYellow";
    st.className = NewClass;
    }
  
    //***************
 
    if( st.innerHTML==curpos.left ){
         var Classes = st.className;
    var NewClass = Classes+" sBlue";
    st.className = NewClass;
   
    st.addEventListener("click", _func=function(){
        setPlayrPosit(curpos.left);st.removeEventListener("click", _func,false);
    }, false);   
    }
  
    //***************
        //***************
  
    if( st.innerHTML==curpos.front ){
      var Classes = st.className;
    var NewClass = Classes+" sBlue";
    st.className = NewClass;
    st.addEventListener("click", _func=function(){setPlayrPosit(curpos.front);st.removeEventListener("click", _func,false);
   }, false); 
    }
    if( st.innerHTML==curpos.right ){
      var Classes = st.className;
    var NewClass = Classes+" sBlue";
    st.className = NewClass;
    st.addEventListener("click", _func=function(){setPlayrPosit(curpos.right);st.removeEventListener("click", _func,false);
   }, false); 
    }
  
    //***************
          }
}
function setPlayrPosit(pos){
     deleteStile();
    if(isAlive){
   for (var i=0;i<board.Rooms.length;i++) {
    if( board.Rooms[i].base==pos ){
        curpos=board.Rooms[i];
        break;
    }
    }
   batSnatch(); 

findValue();

    batsHear();
  updateMessage();
    addArow();
    if(batMovpl){batMovpl=false;};
      fallpit();
      wumpEatenYou();
    }else{
    document.getElementById("message").value="You not live";      
    }
}
init();
