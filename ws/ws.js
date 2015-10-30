var http = require('http');
var server = http.createServer();
server.listen(3000,function(){
	console.log('Server is listening on port 3000')
});
var WebSocketServer = require('websocket').server;
var wsServer = new WebSocketServer({
	httpServer:server
});
var connection;
wsServer.on('request',function(req){
	console.log('connected');
	connection = req.accept(null,req.origin);
	connection.on('message',function(message){
		var msgString = message.utf8Data;
		connection.sendUTF(msgString);
	});
	connection.on('close',function(reasonCode, description){
		console.log(connection.remoteAddress + ' disconnected.');
	})
});
