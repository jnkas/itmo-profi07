//while(1){console.log("running: process 2");}
var http2 = require('http');

http2.createServer(function (req, res) {
  res.write('Hello World serv2!'); //write a response to the client
  res.end(); //end the response
}).listen(8070); //the server object listens on port 8080
  console.log('server2 started');
function stopServer2() {
  http2.close(function () {
    console.log('server2 stopped');
  });
}