var express = require('express');
var bodyParser   = require('body-parser');
const f = require('./scr2.js');
var calcul=new f();



var path = require('path');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
/*
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/scr2.js'));
});
*/

app.use(bodyParser());
 
app.post('/', function(request, response){
var form='<form method="post" action="/"><input type="text" name="data" value='+request.body.data+'><input type="submit" value="Submit"></form>';
    form+='<p>'+request.body.data+'= '+calcul.convert(request.body.data)+'='+calcul.getAns(calcul.convert(request.body.data))+'</p>';
  console.log(request.body.data); 
    response.send(form);
});
 // Listen to port 5000
    app.listen(5000, function () {
        console.log('Dev app listening on port 5000!');
    });