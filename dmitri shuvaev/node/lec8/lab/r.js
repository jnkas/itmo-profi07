const express=require('express');

fs = require('fs'); // bring in the file system api
const router=express.Router();
var mustache = require('mustache');
let model = require('./model/model.js');
var mysql = require('mysql');
var connection = null;
var ob={};
//******************************
function conect(){
 connection = mysql.createConnection({
	host : 'localhost',
	user : 'admin',
	password : 'admin',
	database : 'firstDB'
});	
connection.connect();  
}
//*******************************
function setValue(value) {
  ob = value;
 console.log('id=>'+ob.id+' login=>'+ob.Name+' pasw=>'+ob.Password);
  
}
//*******************************
var counter = 0;

    var options = {
        maxAge: 1000 * 60 * 1, // would expire after 15 minutes
        httpOnly: false, // The cookie only accessible by the web server
      
    }
     var name="d";
   var pasword="1";  
//************************
   function getUserbyName(name,p){
  
     
   
	if(connection.state !== 'disconnected'){
		//console.log('ending');
     //connection.end();
   }
     //console.log('ido=>'+o.id+' login=>'+o.login+' pasw=>'+o.pass);   
   
}
//*****************************************
router.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
  
});
router.get('/update/registration',function(req,res){
  res.sendFile(__dirname+"/public/update_form.html");
  
});
//*****************************************
router.post('/admin',function(req,res){
    if(connection==null){
     conect();
         
    }
            var o={};
             o.id=0;
             o.Name='';
             o.Password=''; 
             setValue(o);  
 
        connection.query("SELECT * FROM user", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    // iterate for all the rows in result
    Object.keys(result).forEach(function(key) {
      var row = result[key];
	  if(row.login==req.body.name && row.pass==req.body.pasword){
             console.log('id=>'+row.id+' login=>'+row.login+' pasw=>'+row.pass);
             var o={};
             o.id=row.id;
             o.Name=row.login;
             o.Password=row.pass; 
             setValue(o);
             
      
      }

    });
              console.log('id=>'+ob.id);
      if( !req.cookies.name && ob.id>0){
  
          // Set cookie
     var kc=  encrypt(req.body.pasword);
        var n=encrypt(req.body.name);
    res.cookie('pasword',kc , options) // options is optional
    res.cookie('name',n , options) // options is optional 
        var o={};
    o.Name=ob.Name;
    o.Password=ob.Password;
var rData = {records:o}; 

var page = fs.readFileSync('mypage.html', "utf8"); 

var html = mustache.to_html(page, rData); 
res.send(html); // send to client    
    }else if(req.cookies.pasword&&req.cookies.name){
     console.log('pasword->'+decrypt(req.cookies.pasword));
    var o={};
    o.Name=ob.Name;
    o.Password=ob.Password;
var rData = {records:o}; 

var page = fs.readFileSync('mypage.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client          
             }else{
     res.sendFile(__dirname+"/index.html");
        
    }
});   
  



});
router.post('/reset',function(req,res){
  res.clearCookie('pasword');
  res.clearCookie('name');  
  res.sendFile(__dirname+"/index.html");  
});
//*********************************************
router.post('/update/registration',function(req,res){
 model.updateUser(req.body.login,
		req.body.pass,
		req.body.telefon,req.body.id);
  //res.sendFile(__dirname+"/index.html");  
});
//*********************************************
router.post('/admin/registration',function(req,res){
	model.saveNewUser(
		req.body.login,
		req.body.pass,
		req.body.telefon,
		function(err, id){
			if(err) {
				console.log(err);
				return next(err);
			}
			console.log('Пользователь с id ' + id + ' создан');
			res.send('Пользователь с id ' + id + ' создан');		
		} 
	); 
});
router.get('/add',function(req,res){

  res.sendFile(__dirname+"/public/reg_form.html");  
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
 


//



module.exports=router;