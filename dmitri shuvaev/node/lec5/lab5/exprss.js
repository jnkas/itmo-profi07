var express=require('express');
var path=require('path');
var bodyParser   = require('body-parser');
var app=express();
const routes=require('./r');
app.set('port',3000);
app.use(bodyParser()); // get information from html forms
app.use('/user',routes);


/*
app.get('/',function(req,res){
    res.send('Express Works');
});
*/

app.listen(app.get('port'),function(){
    console.log('Express started press Ctrl-c to terminate');
});
/*
app.post('/user',function(req,res){
    res.send("Submited use's name:"+req.body.name);
});
*/