var express = require('express'),
app=express(),
http=require('http'),
socketIO=require('socket.io'),
server,io;
app.get('/',function(req,res){
    res.sendFile(__dirname+'/ind.html');
});
app.get('/jquery-3.3.1.js',function(req,res){
    res.sendFile(__dirname+'/jquery-3.3.1.js');
});
server=http.Server(app);
server.listen(5000);
io=socketIO(server);
var players={},
    unmatched;
function joinGame(socket){
    players[socket.id]={
        opponent:unmatched,
        symbol:'X',
        socket:socket
    };
    if(unmatched){
        players[socket.id].symbol='0';
        players[unmatched].opponent=socket.id;
        unmatched=null;
    }else{
        unmatched=socket.id;
    }
}
function getOpponent(socket){
    if(!players[socket.id].opponent){
        return;
    }
    return players[
        players[socket.id].opponent
    ].socket;
}
io.on('connection',function(socket){
    console.log('sid=>'+socket.id);
    joinGame(socket);
    if(getOpponent(socket)){
        socket.emit('game.begin',{
            symbol:players[socket.id].symbol
            
        });
              getOpponent(socket).emit('game.begin',{
            symbol:players[getOpponent(socket).id].symbol
            
        });
    }
    socket.on('make.move',function(data){
        if(!getOpponent(socket)){
            return;
        }
        socket.emit('move.made',data);
        getOpponent(socket).emit('move.made',data);
        
    });
    socket.on('disconnect',function(){
        if(getOpponent(socket)){
            getOpponent(socket).emit('opponent.left');
        }
    });
});