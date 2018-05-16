
var Libtovar = (function () {
    
  // Keep this variable private inside this closure scope
  //var img = new Image();
 var img_src = "sakura.jpg";
 tovar = {
        articul: "Мебель",
        properties: "Ability of a material to deform under tensile load",
        description: "materials that satisfy human wants",
         };
function ph(placehere){
 var elem = document.createElement("img");
 elem.id="picture";
 elem.setAttribute("src", img_src);
 elem.setAttribute("height", "100");
 elem.setAttribute("width", "150");
 elem.setAttribute("alt", "Flower");
 placehere.appendChild(elem);   
};
  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    photo: function(placehere) {
var elem = document.createElement("img");
elem.id="picture";
elem.setAttribute("src", img_src);
elem.setAttribute("height", "100");
elem.setAttribute("width", "200");
elem.setAttribute("alt", "Flower");
placehere.appendChild(elem);


    },
table: function addTable(myTableDiv) {
    //var myTableDiv = document.getElementById(placehere);

    var table = document.createElement('TABLE');
    table.border = '1';
    /*
      for (var j = 0; j < 4; j++) {
            var row = table.insertRow(j);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);



      
                cell1.id="cellid";
                cell1.innerHTML ="Dmitry",      


                cell2.innerHTML = student.rank,
                cell3.innerHTML = student.stuclass;
      }
*/

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    table.style.borderCollapse= "collapse";
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
     cell.style.textAlign='center';
     cell.style.background="#ccd6e8";
     cell.innerHTML = "<b>Properties</b>";
        cell = row.insertCell(1);
        cell.innerHTML = "<b>Photo</b>";
        cell.style.textAlign='center';
        cell.style.background="#ccd6e8";
        cell = row.insertCell(2);
        cell.innerHTML = "<b>Description</b>";
        cell.style.textAlign='center';
        cell.style.background="#ccd6e8";
        cell = row.insertCell(3);
        cell.innerHTML = "<b>Articul</b>";
        cell.style.textAlign='center';
        cell.style.background="#ccd6e8";
    //==================================
    
    for (var i = 0; i < 1; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < 4; j++) {
            var td = document.createElement('TD');
            td.width = '150';
            if(i==0&&j==0){
                td.appendChild(document.createTextNode(tovar.properties));
               td.style.textAlign='center';
            }
            else if(i==0&&j==2){
                td.appendChild(document.createTextNode(tovar.description));
               td.style.textAlign='center';
            }
            else if(i==0&&j==3){
                td.appendChild(document.createTextNode(tovar.articul));
               td.style.textAlign='center';
            }
            else{
                 ph(td);
                td.style.textAlign='center';
            }
         td.style.border = '1px solid black';
            tr.appendChild(td);
        }
    }
    
    myTableDiv.appendChild(table);
}

   
  }
})();

var v = document.getElementById('tovar');
v.style.margin="auto";
//v.style.background="green";
v.style.width="600px";
//tovar.photo(v);
Libtovar.table(v);

//var v = document.getElementById('cellid');
//tovar.photo(v);