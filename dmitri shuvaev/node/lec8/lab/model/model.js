var mysql = require('mysql');
var connection = null;
function conect(){
 connection = mysql.createConnection({
	host : 'localhost',
	user : 'admin',
	password : 'admin',
	database : 'firstDB'
});	
connection.connect();  
}
var ob={};
function setValue(value) {
  ob = value;
 console.log('id=>'+ob.id+' login=>'+ob.Name+' pasw=>'+ob.Password);
  
}
function retu(){
    return ob;  
}

module.exports = {
      
	saveNewUser:function(login, pass, tel, cb){
    if(connection==null){
     conect();
            
    }

		connection.query('INSERT INTO user(login, pass, telefon) VALUES (?,?,?)', [login, pass, tel] , function (error, results, fields){
			if (error) return cb(error);
			//cb(null, results.insertId);
		});

   
    if(connection.state !== 'disconnected'){
      //connection.end();
        
   }
	},
updateUser:function(login,pas,tel,id){
    if(connection==null){
     conect();        
    }//
   var sql = "UPDATE user set login =? , pass =? , telefon =? WHERE id = ?";
 
var query = connection.query(sql, [login, pas,tel, id], function(err, result) {
    console.log("Record Updated!!");
    console.log(result);
});  
     },   
    getUserbyName:function(name,p){
  /*
     
    if(connection==null){
     conect();
         
    }
    
        connection.query("SELECT * FROM user", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    // iterate for all the rows in result
    Object.keys(result).forEach(function(key) {
      var row = result[key];
	  if(row.login==name && row.pass==p){
             //console.log('id=>'+row.id+' login=>'+row.login+' pasw=>'+row.pass);
           var o={};
             o.id=row.id;
             o.Name=row.login;
             o.Password=row.pass; 
         setValue(o);
  
      
      }

    });

	
    });
            
	if(connection.state !== 'disconnected'){
		//console.log('ending');
     //connection.end();
   }
     //console.log('ido=>'+o.id+' login=>'+o.login+' pasw=>'+o.pass);   
   return ob;
   */
}

}