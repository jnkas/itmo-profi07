/*
1*****. Тестовое задание с собеседования (необязательное)
Необходимо настроить отправку заявок пользователей с сайта наш сервер, используя API.
После отправки данных необходимо вывести на экран ответ сервера.
Ниже представлена информация по работе с API.

Работа с API
URL для отправки:
http://somesite.ru/scripts/test_task/api_sample
Данные отправляются методом POST

Отправка заявок 
method=send_lead
Список параметров:
method — параметр отвечает за выбор функции, которая будет обрабатывать запрос. В данном случае он будет равен «send_lead»
name — имя введенное пользователем на сайте
phone — телефон, введенный пользователем
ip — ip-адрес пользователя
key — ключ для работы с API

Все параметры являются обязательными.
Ответ возвращается в формате JSON

Получение ключа для работы с API
method=get_api_key
Список параметров:
method — параметр отвечает за выбор функции, которая будет обрабатывать запрос. В данном случае он будет равен «get_api_key»

Ответ сервера
Пример ответа при успешно осуществленной отправке:
{"status":"success","message":"lead was successfully sent","data":{"name":"imya","phone":"telefon","ip":"127.0.0.1"},"key":"d35K54teb436e3eB"}

Описание параметров:
status — статус выполнения запроса (success — запрос успешно выполнен, error — во время выполнения запроса произошла ошибка)
message — сообщение с описанием результата выполнения запроса
data — массив с отправленными данными
key — используемый ключ доступа
*/
    var express = require('express');
    var path = require('path');
    var app = express();
    var bodyParser   = require('body-parser');

    app.use(bodyParser()); 


var validkey='d35K54teb436e3eB';
    app.get('/somesite.ru/scripts/test_task/api_sample', function (req, res) {
        res.sendFile(path.join(__dirname + '/mainForm.html'));
    });
var data = [];


    app.post('/get_api_key', function(req, res) {
        var statusv="success";
        if(res.statusCode == 404){
          res.send('error!');     
        }else
        {
         var name = req.body.name;
         var phone=req.body.phone;
         var ip=req.body.ip;
         var key=req.body.key;
         data.push({
        "name" : name,
        "phone": phone,
        "ip"   : ip
        });
        if(validkey==key){
            res.send(JSON.stringify({
             status:statusv, 
             message:"lead was successfully sent",
             data: data[0],
             key: key
            } ));   
        }else{
         res.send('error key !');     
             }    
        }
                      
   


});

    app.listen(5000,function () {
        console.log('Dev app listening on port 5000!');
    });