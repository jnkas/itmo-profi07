var express=require('express');
var crypto = require('crypto');
var path=require('path');
var bodyParser   = require('body-parser');
var app=express();
const routes=require('./r');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.set('port',3000);
app.use(bodyParser()); // get information from html forms
app.use('/user',routes);
/*
Сценарий: Пользователь заходит в админку /admin . При первом заходе ему выводится
приглашение ввести логин и пароль. После ввода данных идет post запрос на сервер роутеру
который проверяет что пользователь такой есть. Здесь надо учитывать что сервер хранит в
статике логин и пароль заранее известного пользователя. После того как аутентификация
прошла успешно система генерирует по логину и паролю хеш, устанавливает его в куку и
генерирует пользователю страницу админки. В случае когда пароль и логин не совпадает
система выводит приглашение ввести данные повторно.(совпадение реализовать через
проверку по hash). При повторном заходе авторизованного пользователя в админку /admin
система должна его пропускать. На страницы админки есть кнопка выход. Если пользователь
на нее нажимает то сессия удаляется и авторизация повторяется.
*/

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