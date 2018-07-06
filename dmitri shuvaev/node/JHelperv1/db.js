const express=require('express');
var bodyParser   = require('body-parser');
var fs = require('fs'); // bring in the file system api
//var fs = require('path');
var config = require('./config');
var mustache = require('mustache');
var app=express();
var path = require('path');
app.set('port',config.server.port);
var mysql = require('mysql');
var connection = null;
app.use(bodyParser()); // get information from html forms
var ob={};
var nextID=0;
var curID=0;
var curTermID=0;
var curdifID=0;
var idDefinit=0;
//******************************
function conect(){
 connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'dbName'
});	
connection.connect();  
}
//*********************************************************************************************************************************************************************************************
function getDefinid(req,callback){
     if(connection==null){
     conect();
         
    }//
    
    var text=req;
var myre = /[\r\n]+/gi;
        if(text!==''&&text!==undefined)
    text = text.replace(myre,"");
    var id=0;
      connection.query('SELECT id FROM tblDefinitions where definition='+mysql.escape(text), function (err, result, fields) {
                 if (err) 
            callback(err,null);
          else{
        for (var i = 0; i < result.length; i++)
         {
             id=result[i].id;
         }      
          curdifID=id; 
              callback(null,id);
          }
  
          //console.log('curdifId=>'+curdifID);
     });  
}//

function getID(callback){
     if(connection==null){
     conect();
         
    }
    curID=0;
    curTermID=0;
        connection.query("SELECT * FROM tbldefinitions", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) {
       callback(err,null,null);
    }
    // if there is no error, you have the result
    // iterate for all the rows in result
    Object.keys(result).forEach(function(key) {
      var row = result[key];
    
	  if(row.id>curID &&row.id==curID+1){
        curID=(row.id);
       
      }

      
    }); 
     
        connection.query('UPDATE tbldefinitions SET id = id - 1  where id >'+mysql.escape(curID+1), function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) callback(err,null,null);
    // if there is no error, you have the result
//
      connection.query("SELECT * FROM tblTerms ORDER BY id", function (err, result, fields) {
            if (err) callback(err,null);  
              Object.keys(result).forEach(function(key) {
      var row = result[key];
  
	  if(row.id>curTermID&&row.id==curTermID+1){
        curTermID=(row.id);      
      }      
    }); 
           //console.log('crtermid=>'+curTermID);
              callback(null,curID,curTermID);
  });  
  });
   //console.log('crid=>'+curID);
          
});

  
}
//*********************************************************************************************************************************************************************************************
app.get('/style.css',function(req,res){
  
     res.sendFile(__dirname+"/style.css");

});
app.get('/12-column-grid.css',function(req,res){
  
     res.sendFile(__dirname+"/12-column-grid.css");

});
app.get('/',function(req,res){
 getValues(ob.term);
    // res.sendFile(__dirname+"/index.html");
    /*
       res.sendFile(__dirname+"/style.css");
           res.sendFile(__dirname+"/12-column-grid.css");
           */
    var o={};
    o.term=ob.term;
    o.Definitions=ob.id;
    var rData = {records:o}; 

var page = fs.readFileSync('index.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client  
});
//*********************************************************************************************************************************************************************************************
app.post('/',function(req,res){
   getValues(ob.term);
    var o={};
    o.term=ob.term;
    o.Definitions=ob.id;
    var rData = {records:o}; 
  getValues(o.term);
var page = fs.readFileSync('index.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client  
});
//*********************************************************************************************************************************************************************************************
app.post('/showAddForm',function(req,res){
   ob.term=req.body.term; ob.id=req.body.textArea;
                var o={};
    o.term=req.body.term;
    o.Definitions=req.body.textArea;
    o.mesage='';
    var rData = {records:o}; 

var page = fs.readFileSync('addblank.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client 
    //res.sendFile(__dirname+"/addblank.html");
  //res.sendFile(path.join(__dirname + '/addblank.html'));
});
//*********************************************************************************************************************************************************************************************
function findValues(req,res){
      if(connection==null){
     conect();
         
    }
         getID(function(err,curID1,curTermID1){
        if (err) {
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            curID=curID1;
            curTermID=curTermID1;  
               //'select definition from tbldefinitions join tblterms on tblterms.id=tbldefinitions.term_id where tblterms.term='+mysql.escape(req.body.term)
        connection.query('select definition from tbldefinitions join tblterms on tblterms.id=tbldefinitions.term_id where tblterms.term='+mysql.escape(req.body.term)
                         , function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) {
       // return console.log('error in query');
        throw err;
    }
        var o={};
             o.term=req.body.term; o.Definitions='';
            var temp='';
            

          
 myObj = result[0];
    for( var j in myObj ) {
      if (myObj.hasOwnProperty(j)) {
        o.Definitions+=myObj[j]+'\n';
          getDefinid(myObj[j], function(err,data){
                      if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            curdifID=data;
            idDefinit=data;
            console.log('curdifId=>'+curdifID);  
            getValues(req.body.term);
           // console.log("result from db is : ",curdifID);   
        }  
    });
          }     
      }
if(o.term==''||o.term==undefined){
       o.mesage='data';
      var rData = {records:o}; 
     var page = fs.readFileSync('alertNoData.html', "utf8"); 
     var html = mustache.to_html(page, rData); 
     res.send(html); // send to client    
}else if(o.Definitions==''){
     o.mesage='data';
      var rData = {records:o}; 
     var page = fs.readFileSync('alertNoDataDefin.html', "utf8"); 
     var html = mustache.to_html(page, rData); 
     res.send(html); // send to client     
         }else{
      var rData = {records:o}; 
     var page = fs.readFileSync('index.html', "utf8"); 
     var html = mustache.to_html(page, rData); 
     res.send(html); // send to client    
}

});  
        }  
    });
   
    
}
app.post('/find',function(req,res){
 findValues(req,res); 

});
//*********************************************************************************************************************************************************************************************
app.post('/add',function(req,res){
     if(connection==null){
     conect();
         
    }
    getID(function(err,curID1,curTermID1){
        if (err) {
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            curID=curID1;
            curTermID=curTermID1; 
               //console.log('idddddddddddddddd=>'+curID);
    var help=false;
    connection.query("SELECT * FROM tblTerms", function (err, result, fields) {
          if (err) throw err;

    Object.keys(result).forEach(function(key) {
      var row = result[key];
        
	  if(row.term==req.body.term){
          help=true;
	 connection.query('INSERT INTO tblDefinitions(id, definition, term_id) VALUES (?,?,?)', [++curID, req.body.definition, row.id] , function (error, results, fields){
		if (error) throw error;
		
		});
           console.log('inserted');      
            var o={};
    o.term=req.body.term;
    o.Definitions=req.body.definition;
    o.mesage='inserted';
    var rData = {records:o}; 

var page = fs.readFileSync('alert.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client 

          //res.sendFile('alert.html', { root: __dirname });
         // res.send(html);
      }
      
    });  
      if(help==false){
       
     	 connection.query('INSERT INTO tblTerms(id, term) VALUES (?,?)', [++curTermID, req.body.term] , function (error, results, fields){
		if (error) throw error;
		     console.log('inserted to tbterm'+req.body.term+'terid=>'+curTermID); 
                 var text=req.body.definition;
                 var myre = /[\r\n]+/gi;
                 if(text!==''&&text!==undefined)
                 text = text.replace(myre,"");
             if(text!=''){
            connection.query('INSERT INTO tblDefinitions(id, definition, term_id) VALUES (?,?,?)', [++curID, text, curTermID] , function (error, results, fields){
		if (error) throw error;
		           console.log('inserted');      
            var o={};
    o.term=req.body.term;
    o.Definitions=text;
    o.mesage='inserted';
    var rData = {records:o}; 

var page = fs.readFileSync('alert.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client 
		});  
             }
		});     
      }  
      });  
        }
            });
      
 });//end post 
//*********************************************************************************************************************************************************************************************
app.post('/delete',function(req,res){
     if(connection==null){
     conect();
         
    }//req.body.textArea
    var text=req.body.textArea;
var myre = /[\r\n]+/gi;
        if(text!==''&&text!==undefined)
    text = text.replace(myre,"");
    if(text!==''){
        connection.query('select definition from tbldefinitions where definition='+mysql.escape(text), function (error, results, fields){
        		if (error) throw error;
            var resul='';
        for (var i = 0; i < results.length; i++)
         {
             resul=results[i].definition;
         }  
            if(text===resul){
                   connection.query('delete from tblDefinitions where definition='+mysql.escape(text),
                        function (err, result, fields) {
          if (err) throw err;        
       //getID();
                   
    ob.term=req.body.term;
    ob.id='';
    var o={};
    o.term=req.body.term;
    o.Definitions='';
    o.mesage='deleted';
    var rData = {records:o}; 
var page = fs.readFileSync('alertDel.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client     
  });    
            }else console.log('empty text');

        	});  
    }
 });//end post 
//*********************************************************************************************************************************************************************************************
app.post('/deleteTerm',function(req,res){

     if(connection==null){
     conect();
     }
    var text= req.body.term;
    var myre = /[\r\n]+/gi;
        if(text!==''&&text!==undefined)
        text = text.replace(myre,"");
    //
    var termid=0;
     connection.query('SELECT id FROM tblTerms where term='+mysql.escape(text), function (err, result, fields) {
      
         for (var i = 0; i < result.length; i++)
         {
             termid=result[i].id;
         }      
         if(termid>0){
       // console.log('id=>'+termid);      
        connection.query('delete from tblDefinitions where term_id='+mysql.escape(termid),
                function (err, result, fields) {
          if (err) throw err;        
      // getID();
                //
           connection.query('delete from tblTerms where id='+mysql.escape(termid),
                        function (err, result, fields) {
          if (err) throw err; 
     
        getValues(text);
               
  }); 
       ob.term='';
    ob.id='';
    var o={};
    o.term=text;
    o.Definitions='';
    o.mesage='term deleted';
    var rData = {records:o}; 
var page = fs.readFileSync('alertDel.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client            
  });     
         } 
     });      
});
//*********************************************************************************************************************************************************************************************
app.post('/edit',function(req,res){
     if(connection==null){
     conect();
         
    }//
         //getID();

   console.log('curdifId edit=>'+curdifID);  
    var text=req.body.textArea;
    var myre = /[\r\n]+/gi;
        if(text!==''&&text!==undefined)
    text = text.replace(myre,"");
    var term= req.body.term;
        if(term!==''&&term!==undefined)
    term = term.replace(myre,"");
    var termid=0;

                   if(curdifID>0&&text!==''){
       connection.query('UPDATE tblDefinitions SET definition='+ mysql.escape(text)+'WHERE id='+mysql.escape(curdifID),
            function (err, result, fields) {
          if (err) throw err;        
       //getID();
        
  }); 
         }

    if(term!==''){
          connection.query('SELECT term_id FROM tblDefinitions where id='+mysql.escape(curdifID), function (err, result, fields) {
              if (err) throw err;
        for (var i = 0; i < result.length; i++)
         {
             termid=result[i].term_id;
         }
                   if(termid>0){
                     console.log("term_id=>",termid);      
                            connection.query('UPDATE tblTerms SET term='+ mysql.escape(term)+'WHERE id='+mysql.escape(termid),
            function (err, result, fields) {
          if (err) throw err;        
       //getID();
          getValues(term);
  });   
                   }
       });          
    }
   
    ob.term=term;
    ob.id=text;
    var o={};
    o.term=term;
    o.Definitions=text;
    o.mesage='updated';
    var rData = {records:o}; 
var page = fs.readFileSync('alertDel.html', "utf8"); 
var html = mustache.to_html(page, rData); 
res.send(html); // send to client 
        
 
 
 });//end post 
//*********************************************************************************************************************************************************************************************
function sendRes(term,definition,res){
 var o={};
 o.term=term; o.Definitions=definition; 
 var rData = {records:o}; 
 var page = fs.readFileSync('index.html', "utf8"); 
 var html = mustache.to_html(page, rData); 
 res.send(html); // send to client 
}
//*********************************************************************************************************************************************************************************************

var obj={};
obj.term='';
obj.tempDifID=0;
obj.ids = [];
function getValues(text){
      if(connection==null){
     conect();       
    }//
    getID(function(err,curID1,curTermID1){
        if (err) {
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            //console.log('curadfadfadf='+curTermID1);
            curID=curID1;
            curTermID=curTermID1;  
    var defin='';
    var myre = /[\r\n]+/gi;
      
    if(text!==''&&text!==undefined){    text = text.replace(myre,"");}
    else{ //if(obj.ids.length>0)obj.ids.splice(0, obj.ids.length);
    }
      var termid=0;
    connection.query('SELECT id FROM tblTerms where term='+mysql.escape(text), function (err, result, fields) { 
        for (var i = 0; i < result.length; i++)
         {
             termid=result[i].id;
         }      
         if(termid>0){

                 obj.term=text;
          if(obj.ids.length>0)obj.ids.splice(0, obj.ids.length);
  connection.query('SELECT definition FROM tblDefinitions where term_id ='+mysql.escape(termid), function (err, result, fields) {   
       if (err) throw err;
          for (var i = 0; i < result.length; i++)
         {
             defin=result[i].definition;
             obj.ids.push(defin);
                 ob.id=result[0].definition;

         }
   ob.term=text;

  });
  
         }
  });
        }
          }); 
}//

app.post('/next',function(req,res){
      //console.log('defin is=>',obj.ids);
       obj.tempDifID++;
    if(obj.tempDifID<obj.ids.length){
        getDefinid(obj.ids[obj.tempDifID], function(err,data){
            if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            //curdifID=data;
            curdifID=obj.tempDifID+idDefinit;
             //curdifID++;
             console.log('curdifId=>'+curdifID);  
            getValues(obj.term);
             sendRes(obj.term,obj.ids[obj.tempDifID],res);  
        }  
    });
     
    }else{
     obj.tempDifID=obj.ids.length-1;
        getDefinid(obj.ids[obj.tempDifID], function(err,data){
                      if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            //curdifID=data;
               curdifID=obj.tempDifID+idDefinit;
             //curdifID++;
             console.log('curdifId=>'+curdifID);  
            getValues(obj.term);
            sendRes(obj.term,obj.ids[obj.tempDifID],res); 
        }  
    });
       
    }
    
 });//end post 
//*********************************************************************************************************************************************************************************************
app.post('/prev',function(req,res){
      //console.log('defin is=>',obj.ids);
       obj.tempDifID--;
    if(obj.tempDifID>0){
          getDefinid(obj.ids[obj.tempDifID], function(err,data){
                      if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            //curdifID=data;
               curdifID=obj.tempDifID+idDefinit;
             //curdifID++;
               console.log('curdifId=>'+curdifID); 
            getValues(obj.term);
            sendRes(obj.term,obj.ids[obj.tempDifID],res);  
        }  
    });
       
    }else{
     obj.tempDifID=0;
        getDefinid(obj.ids[obj.tempDifID], function(err,data){
         if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            //curdifID=data;
               curdifID=obj.tempDifID+idDefinit;
           // curdifID++;
               console.log('curdifId=>'+curdifID);  
            getValues(obj.term);
            sendRes(obj.term,obj.ids[obj.tempDifID],res);  
        }  
    });
      
    }
    
});//end post
//*********************************************************************************************************************************************************************************************
app.post('/last',function(req,res){
   obj.tempDifID=obj.ids.length-1;
        getDefinid(obj.ids[obj.tempDifID], function(err,data){
         if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            curdifID=data;
             
              console.log('curdifId=>'+curdifID);  
            getValues(obj.term);
            sendRes(obj.term,obj.ids[obj.tempDifID],res);  
        }  
    });
});//end post 
//*********************************************************************************************************************************************************************************************
app.post('/first',function(req,res){
     obj.tempDifID=0;
        getDefinid(obj.ids[obj.tempDifID], function(err,data){
         if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            curdifID=data;
            
              console.log('curdifId=>'+curdifID);  
            getValues(obj.term);
            sendRes(obj.term,obj.ids[obj.tempDifID],res);  
        }  
    }); 
});//end post 
//*********************************************************************************************************************************************************************************************  
app.listen(app.get('port'),config.server.host,function(){
    console.log('Express started press Ctrl-c to terminate');
});
/*
 CREATE DATABASE dbName CHARACTER
SET utf8 COLLATE utf8_general_ci;
 
 CREATE TABLE tblTerms 
(
 id INTEGER PRIMARY KEY,
 term VARCHAR (100) NOT NULL UNIQUE
) ENGINE = InnoDB
 DEFAULT CHARACTER SET = utf8;
 
 
  CREATE TABLE tblDefinitions  
(
id INTEGER PRIMARY KEY,
definition VARCHAR (255) NOT NULL,
term_id INTEGER NOT NULL,
FOREIGN KEY term_fk(term_id)
REFERENCES tblTerms(id)
) ENGINE = InnoDB
 DEFAULT CHARACTER SET = utf8;
 
 
 INSERT INTO tblTerms VALUE
 (1,'music');
 
  INSERT INTO tblDefinitions VALUE
 (1,'california',1);
   INSERT INTO tblDefinitions VALUE
 (2,"can't buy my love",1);
 
 delete from tblDefinitions where id=1;
 
  select definition from tbldefinitions
     join tblterms on tblterms.id=tbldefinitions.term_id
     where tblterms.term='music';
 */