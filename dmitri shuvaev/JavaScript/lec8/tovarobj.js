 var tovar = {
        img_src: "sakura.jpg",
        articul: "Мебель",
        properties: "Ability of a material to deform under tensile load",
        description: "materials that satisfy human wants",
     //============Object Method===========
        photo: function(placehere) 
        {
         var elem = document.createElement("img");
         elem.id="picture";
         elem.setAttribute("src", this.img_src);
         elem.setAttribute("height", "100");
         elem.setAttribute("width", "150");
         elem.setAttribute("alt", "Flower");
         placehere.appendChild(elem);
         },
      //============Object Method===========
        table: function(myTableDiv) {


    var table = document.createElement('TABLE');
    table.border = '1';


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
                td.appendChild(document.createTextNode(this.properties));
               td.style.textAlign='center';
            }
            else if(i==0&&j==2){
                td.appendChild(document.createTextNode(this.description));
               td.style.textAlign='center';
            }
            else if(i==0&&j==3){
                td.appendChild(document.createTextNode(this.articul));
               td.style.textAlign='center';
            }
            else{
                 this.photo(td);
                
                td.style.textAlign='center';
            }
         td.style.border = '1px solid black';
            tr.appendChild(td);
        }
    }
    
    myTableDiv.appendChild(table);
           
}//end table method
         };
//
var v = document.getElementById('tovar');
v.style.margin="auto";
v.style.width="600px";
tovar.table(v);