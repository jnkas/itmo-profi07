var http = require('http');
var url = require('url');
var cp = require('child_process');
var child1;
  var child2;
   child1 = cp.fork(__dirname + '/child1.js');

var server2 = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
    var id = queryData.id;
    var code = queryData.code;

  if (id=="1"&&code=="delete from user") {
  
        child1.send('close');
     
             
             child1.on('message', (m) => {
                  console.log(m);
              child1.kill('SIGTERM');
              response.end(); //close the response
              request.connection.end(); //close the socket
              request.connection.destroy; //close it really
              server2.close(); //close the server 
              child2 = cp.fork(__dirname + '/child2.js');
                 });

          
  
                 }else {
      response.end("Hello from new server\n");
     
        child1.send('start');
  }

});
server2.listen(8000);
console.log('server2 8000');

