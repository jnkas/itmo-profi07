
var http 	= require('http');
var fs 		= require('fs');
var port 	= "1111" ;

http.createServer(function(request, response) {
 
    response.writeHead(200, {
        'Content-Type': 'text/json',
		'Access-Control-Allow-Origin': '*',
		'X-Powered-By':'nodejs'
    });


    fs.readFile('jsondata.json', function(err, content){
        response.write(content);
        response.end();
    });

}).listen(port);

console.log("Listening on port " + port );