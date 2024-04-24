

// const WebSocket = require('ws');
// console.log('app started')

// const wss = new WebSocket.Server({ port: 8080 });

// var permission = 'permission';

// wss.on('connection', function connection(ws) {

//     console.log('Main app connected');
//      ws.send(permission);
// });
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Access: ' + "Per");
});


app.listen(3000);