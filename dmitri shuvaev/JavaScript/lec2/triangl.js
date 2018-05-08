    var AB,AC,BC;
var ax=0,ay=0, az=1;
var bx=0, by=1, bz=1;
var cx=1, cy=0,cz=1;
//
function Point(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
}
var A=new Point(ax,ay,az);
var B=new Point(bx,by,bz);
var C=new Point(cx,cy,cz);

//
function lengthSide(p1,p2) {
      var xDiff = p1.x - p2.x;
      var yDiff = p1.y - p2.y;
      var zDiff = p1.z - p2.z;
      var res= xDiff*xDiff + yDiff*yDiff+zDiff*zDiff;
    
    return Math.sqrt(res); //
}

AB=lengthSide(A,B);//c
AC=lengthSide(A,C);//b
BC=lengthSide(B,C);//a
  // From Cosine law
   var alpha = Math.acos((AC*AC + AB*AB - BC*BC)/(2*AC*AB));
   var betta = Math.acos((BC*BC + AB*AB - AC*AC)/(2*BC*AB));
   var gamma = Math.acos((BC*BC + AC*AC - AB*AB)/(2* BC*AC));
alpha=Math.round(alpha * 180 / Math.PI);
betta=Math.round(betta * 180 / Math.PI);
gamma=Math.round(gamma * 180 / Math.PI);
 document.write("alpha=" +alpha +"<br>");
 document.write("betta=" + betta +"<br>");
 document.write("gamma=" + gamma +"<br>");
if(alpha==90||betta==90||gamma==90)document.write("треугольник с заданными координатами прямоугольный" +"<br>");