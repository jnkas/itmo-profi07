/*
Требуется реализовать http сервер конвертации имен 
идентификаторов, который:
- если url от клиента: /camel_to_snake?name='identificator', 
то необходимо полученный идентификатор обработать в 
функции camel_to_snake(name) и результат отправить клиенту;
- если url от клиента: /snake_to_camel?name='identificator', 
то необходимо полученный идентификатор обработать в 
функции snake_to_camel(name) и результат отправить клиенту.
Так же требуется реализовать две функции для 
конвертации имен идентификаторов.
Имя идентификатора - это имена переменных, 
констант, функций, классов и т.д.
CamelCase (верблюжия нотация) - стиль написания 
составных слов, при котором несколько слов 
пишутся слитно без пробелов, при этом каждое 
слово внутри фразы пишется с заглавной буквы.
snake_case (змеиная нотация) - стиль написания 
составных слов, при котором несколько слов 
разделяются символом подчеркивания (_), и не 
имеют пробелов в записи, причём каждое слово 
пишется с маленькой буквы.
Напишите функцию camel_to_snake(name), которая 
принимает в качестве единственного аргумента 
имя идентификатора в CamelCase нотации и 
возвращает его запись в змеиной нотации.
Напишите функцию snake_to_camel(name), которая 
принимает в качестве единственного аргумента 
имя идентификатора в змеиной нотации и 
возвращает его запись в CamelCase нотации.
Тестовый набор данных для тестирования сервера №1:
Входные данные
'CamelCase'
Выходные данные
'camel_case'
Тестовый набор данных для тестирования сервера №2
Входные данные
'getUserId'
Выходные данные
'get_user_id'
Тестовый набор данных для тестирования сервера №3
Входные данные
'snake_case'
Выходные данные
'SnakeCase'
Тестовый набор данных для тестирования сервера №4
Входные данные
'set_repository'
Выходные данные
'SetRepository'
*/
let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer(function onRequest(request, response) {
	let urlObj = url.parse(request.url, true)
	
	//console.log(urlObj);
	
	if(urlObj.pathname == '/') {
		let filename = 'index.html' 
		fs.readFile(filename, 'utf-8', function(err, data){
			if(err) return console.error(err);
			
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		});
	} else if (urlObj.pathname == '/camel_to_snake'){
		//Пришли данные отправляем их же назад
		response.writeHead(202, {'Content-Type':'text/html'});
        var val=urlObj.query.any_text;
		response.end(camel_to_snake(val));
	} 
    else if (urlObj.pathname == '/snake_to_camel'){
		//Пришли данные отправляем их же назад
		response.writeHead(202, {'Content-Type':'text/html'});
        var val=urlObj.query.any_text;
		response.end(snake_to_camel(val));
	}else {
		response.writeHead(404, {'Content-Type':'text/html'});
		response.end('404');
	}
}).listen(8080);
console.log("server 8080");
//
function camel_to_snake(name){
   var n= name.replace(/[^A-Za-z0-9]/g, '');
    var st="";
    for(var i=0;i<n.length;i++){
         if (n.charAt(i) === n.charAt(i).toUpperCase()){
             if(i>0){
              st+='_'; 
                 st+=n.charAt(i).toLowerCase();
             }else{
                 st+=n.charAt(i).toLowerCase();
             }
             
         }else{
             st+=n.charAt(i);
         }
    }
    return st;
}
function snake_to_camel(name){
        var st="";
    for(var i=0;i<name.length;i++){
         if (name.charAt(i) === '_'){
             if(i>0){  
                 i++;
                 if(i<name.length)
            st+=name.charAt(i).toUpperCase();
             }
             
         }else if(i==0){
            st+=name.charAt(i).toUpperCase();
             }
        else
            {
                st+=name.charAt(i);
            }
    }
    return st.replace(/\s+/g, ''); //'snake_case' 'SnakeCase'
}