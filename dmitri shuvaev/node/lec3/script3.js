var request=new XMLHttpRequest();

request.onreadystatechange=function(){
    if(request.readyState===4){
        if(request.status===200){
        var bears=JSON.parse(request.response);
        console.log(bears[1]); 
            myFunction(bears[Math.floor(Math.random() * 3)]);
      
        }else{
            throw new Error(request.response);
        }

    }
}


function fu(){
 request.open('GET','/o.json');
 request.send();   
}

window.setInterval(function(){
 fu();
}, 1000);

function myFunction(b) {
  document.getElementById("weather").innerHTML =  b;
}

