

  
process.on('message', (m) => {
    console.log(m);

    if (m === 'start'){
   if(!server.listening){
         startServer();  
    }
    }
  
    else if(m==='close'){
   
       
           stopServer() ; 
     process.send('kill');
    
    }
    
  
});


var http = require('http');

  var server = http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('Hello World!'); //write a response to the client
        response.end(); //end the response
});

function startServer() {
  server.listen(8080, function () {
    console.log('server started');
  });
}

function stopServer() {
  server.close(function () {
    console.log('server stopped');
  });
}
