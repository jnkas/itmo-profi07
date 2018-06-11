var http = require('http');
var url = require('url');
var cp = require('child_process');
var child1;
  var child2;

var server2 = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
    var id = queryData.id;
    var code = queryData.code;

  if (id=="1"&&code=="delete from user") {

       //response.end("Hello from new server\n");  
     child1.kill('SIGTERM');
      child2 = cp.fork(__dirname + '/child2.js');
  }else {
      response.end("Hello from new server\n");
        child1 = cp.fork(__dirname + '/child1.js');
      child1.send('heool');
  }
});
server2.listen(8000);
console.log('server2 8000');