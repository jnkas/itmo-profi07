var d={
            head: {
                  title: 'page title'

            },
            homepage: {
                  title: 'post title',
                  items: 'items',
                  data:"Sketches of Spain",
                  artist:"Miles Davis"
            } 
        }
setInterval(function(){
            jQuery.ajax({
            'type': 'POST',
            'url': 'http://localhost:3000',
            'data': d,
            'cache':false,
            'success':function (mess){
    if(mess){
        render(mess)
    }
}
            })
            
            },4000);
//

function render(mess){
//document.getElementById("contener").innerHTML=; 

      html = Mustache.render('master',d );
}
*/