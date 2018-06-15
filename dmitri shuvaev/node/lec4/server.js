var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require('path');
qs = require('querystring');
var mimeTypes = {
	'.js' : 'text/javascript',
	'.html' : 'text/html',
	'.css' : 'text/css' ,
	'.jpg' : 'image/jpeg',
	'.gif' : 'image/gif'
};

http.createServer(function onRequest(request, response) {
   //console.log(url.parse(request.url).path)
	if(request.method === 'GET') {	
		var postData = "";
		var pathname = url.parse(request.url).path;
		if(pathname == '/')
			pathname = '/index.html';
		var extname = path.extname(pathname);
		var mimeType = mimeTypes[extname];
		//чтобы убрать начальный слэш
		pathname = pathname.substring(1, pathname.length);
 fs.writeFile('headers.JSON', JSON.stringify(psAwoJsong(request, response),null,2), (err) => {
    if (err) {
        console.error(err);
       
             };                               
			});
		if( (extname == ".gif") || (extname==".jpg") ) {
			var img = fs.readFileSync('./' + pathname);
			response.writeHead(200, {'Content-Type': mimeType});
			response.end(img, 'binary');
		} else {
			fs.readFile(pathname, 'utf8', function (err, data){
				if (err) {
					console.log('Could not find or open file '+ 
					pathname + ' for reading\n');
				} else {
					response.writeHead(200, {'Content-Type': mimeType});
					response.end(data);
				}
			});
		}
	} else if (request.method === 'POST') {

		var pathname = url.parse(request.url).path;
          //var query = url.parse(request.url,true).hostname;	
		pathname = pathname.substring(1, pathname.length);
		var newFileStream = fs.createWriteStream(pathname);
       fs.writeFile('headers.JSON', JSON.stringify(psAwoJson(request, response),null,2), (err) => {
    if (err) {
        console.error(err);
       
             };                               
			});
		request
			.on('data', function(chunk){
				newFileStream.write(chunk);
              
			})
			.on('end', function(){
				newFileStream.end();
				response.writeHead(200);
				response.end();
             

       	}); 
    }
}).listen(3000);
 console.log('Server listening on port 3000');
//
function psAwoJson(request, response){
     var o = new Object();  
    o.protocol=request.headers.referer.split(':')[0];
    o.status_code= response.statusCode;
    o.host=request.headers.host   ;
    o.Connection=request.headers.connection;
    o.content=request.headers['content-type'];
    o.url=request.url;
    o.date=new Date();
    o.method=request.method;
    return o;
}
function psAwoJsong(request, response){
     var o = new Object();  
    //
    o.status_code= response.statusCode;
    o.host=request.headers.host   ;
    o.Connection=request.headers.connection;
    o.content=request.headers['content-type'];
    o.url=request.url;
    o.date=new Date();
    o.method=request.method;
    return o;
}