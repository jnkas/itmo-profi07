/*
b) Переписать скрипт таким образом чтобы локаль (ru или en) бралась из переменной среды
окружения LANG. В случае ее отсутствия ее нужно установить из командной строки
Для Windows
set LANG=ru_RU
echo %LANG%
Для Linux
export LANG=ru_RU
*/
/*

*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
//
const fileName = process.env.LANG || "ru_RU";
http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`);

  const parsedUrl = url.parse(req.url);
  // 
  let pathname = `.${parsedUrl.pathname}`;
  // maps file extention to MIME types
  const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'appliaction/vnd.ms-fontobject',
    '.ttf': 'aplication/font-sfnt'
  };
    console.log("path->"+`${pathname}`);
  fs.exists(pathname, function (exist) {
    if(!exist) {
      //
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }
    // 
    if (fs.statSync(pathname).isDirectory()) {
        if(fileName=="en_EN")
         pathname += '/en.html';
        else if(fileName=="ru_RU")
         pathname += '/ru.html';
    }
    //
    fs.readFile(pathname, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
      
        const ext = path.parse(pathname).ext;
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
        res.end(data);
      }
    });
  });
}).listen(9000);
console.log(`Server listening on port 9000`);
