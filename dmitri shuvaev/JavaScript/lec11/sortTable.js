   
var DataTable=function(id)
{
            this.table=document.getElementById(id);
            this.rows = this.table.getElementsByTagName("TR");
           //
        this.swap=function(i,k)
        {
            var x, y;
            var rowsLen=this.table.rows[0].cells.length;
           for(var rownum=0;rownum<rowsLen;rownum++)
           {
            x = this.rows[i].getElementsByTagName("TD")[rownum];
            y = this.rows[k].getElementsByTagName("TD")[rownum];
            let temp=x.innerHTML;
            x.innerHTML=y.innerHTML;
            y.innerHTML=temp;   
           }
        };
        //
    this.sort=function(col){
     for (var i = 1; i < this.rows.length-1; i++) {
   x = this.rows[i].getElementsByTagName("TD")[col];
    for (k = i+1; k <this.rows.length; k++) {
 
      y = this.rows[k].getElementsByTagName("TD")[col];
   
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
       this.swap(i,k);

      }
    }
 
  }     
    }        
};//End tabledata


 var tbl=new DataTable('myTable');
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}