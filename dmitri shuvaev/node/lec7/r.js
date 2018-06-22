const express=require('express');

fs = require('fs'); // bring in the file system api
const router=express.Router();
var mustache = require('mustache');
var counter = 0;

    var options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: false, // The cookie only accessible by the web server
      
    }
     var name="d";
   var pasword="1";  
//************************

router.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
  
});

router.post('/admin',function(req,res){

    if(name==req.body.name && pasword==req.body.pasword){
          // Set cookie
     var kc=  encrypt(req.body.pasword);
        var n=encrypt(req.body.name);
    res.cookie('pasword',kc , options) // options is optional
    res.cookie('name',n , options) // options is optional 
        var o={};
    o.Name=name;
    o.Password=pasword;
var rData = {records:o}; 

var page = fs.readFileSync('mypage.html', "utf8"); 

var html = mustache.to_html(page, rData); 
res.send(html); // send to client    
    }else if(req.cookies.pasword&&decrypt(req.cookies.pasword)==pasword&&(req.cookies.name&&decrypt(req.cookies.name)==name)){
     console.log('pasword->'+decrypt(req.cookies.pasword));
    var o={};
    o.Name=name;
    o.Password=pasword;
var rData = {records:o}; 

var page = fs.readFileSync('mypage.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client          
             }else{
     res.sendFile(__dirname+"/index.html");
        
    }


});
router.post('/reset',function(req,res){
  res.clearCookie('pasword');
  res.clearCookie('name');  
  res.sendFile(__dirname+"/index.html");  
});
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
var hw = encrypt("hello world")
// outputs hello world
console.log(decrypt(hw));

//



module.exports=router;