 var uri= 'http://localhost:1111/';

var request=new XMLHttpRequest();

request.onreadystatechange=function(){
    if(request.readyState===4){
        if(request.status===200){
        var o=JSON.parse(request.response);
        console.log(o.DailyForecasts[0].Temperature.Maximum.Value); 
		
            myFunction(o.DailyForecasts[0],getRandomArbitrary(1,8));
      
        }else{
            throw new Error(request.response);
        }

    }
}


function fu(){
 request.open('GET',uri,true);
 request.send();   
}

window.setInterval(function(){
 fu();
}, 1000);

function myFunction(b,r) {
WidgetCallback(b,r);
  
}
function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

