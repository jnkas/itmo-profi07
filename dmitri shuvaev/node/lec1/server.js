/*
var http=require('http');
function responser(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello');
}
var serber=http.createServer(responser);
serber.listen(1337);
*/
/*
 var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');
*/
// var http = require('http');
/*
 var server = http.createServer(function (req, res){
    console.log("HTTP works!");
});
server.listen(8080);
*/
//

/*
var http = require('http');

http.createServer(function (request, response) {
    console.log("HTTP works!");
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Bello!</h1>');
    response.end();
}).listen(8000);

*/
var http = require('http');
var fs = require('fs');
var fileName="lect16.html";
var fileName2="lect9.html";
var fileName3="error404.html";
http.createServer(function (req,res){
    fs.readFile(fileName, 'utf8', function(err,data){
        if(err){
            console.log('Could not find or open file for reading\n');
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            fs.readFile(fileName2, 'utf8', function(err,data){
                if(err){
                    console.log('Could not find or open file for reading\n');
                }
                else{
                    res.write(data);
					fs.readFile(fileName3, 'utf8', function(err,data){
                if(err){
                    console.log('Could not find or open file for reading\n');
                }
                else{
                    res.end(data);
                }
				 
            })
                }
				})
	
        }
    })
}).listen(8010);
console.log('Server running on 8010');
