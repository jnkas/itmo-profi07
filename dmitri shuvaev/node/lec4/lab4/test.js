var DB=require('./model.js');
var collectionUsers = new DB('users.json');
collectionUsers.addData({login:'sasha', password:'1234'});
collectionUsers.addData({login:'admin', password:'root'});
collectionUsers.write(function(err){
if(err) console.log(err);
console.log('Данные записаны!');
});
console.log(collectionUsers.findDataByPropery('login','admin'));
collectionUsers.read(function(err){
	if(err)console.log(err);
	var obj=collectionUsers.findDataByPropery('login','admin');
	console.log('Пароль админа : '+obj.password);
});