const express=require('express');
fs = require('fs'); // bring in the file system api
const router=express.Router();
var mustache = require('mustache');
router.get('/log',function(req,res){
   res.sendFile(__dirname+"/index.html");

});
router.post('/add',function(req,res){
    
    var o={};
    o.Name=req.body.name;
    o.Password=req.body.pasword;
var rData = {records:o}; 

var page = fs.readFileSync('mypage.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client
  
});


module.exports=router;