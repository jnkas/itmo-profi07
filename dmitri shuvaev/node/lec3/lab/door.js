
/*
var http = require('http');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
  var url="localhost:8080?id=1&code='delete from user'";
    res.end(url);
}).listen(3000);
*/
var http = require('http');
var url = require('url');
//serv2
var server2 = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});

    response.end("Hello from new server\n");
  
});
//
const { fork } = require('child_process');
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
    var id = queryData.id;
    var code = queryData.code;
//const method = request.method;
  if (id=="1"&&code=="delete from user") {
    //
  const compute = fork('child.js');
    //compute.send('start');
    compute.on('message', val => {
      response.end(`Sum is ${val}`);
    });
compute.send({ hello: 'world' });
    //process.exit();
      //server2.listen(8000);
//console.log('server2 8000');
  } else {
    response.end("Hello World\n");
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
console.log('server 8000');
//


// Listen on port 8000, IP defaults to 127.0.0.1
