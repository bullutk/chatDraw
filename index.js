var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res)=>{
	console.log("someone connected via HTTP");
	fs.readFile('index.html', 'utf-8', (error, fileData)=>{
		if(error){
			res.writeHead(500, {'content.type':'text/html'});
			res.end(error);
		}else{
			res.writeHead(200, {'content.type':'text/html'});
			res.end(fileData);
		}
	})
})
// include the server version of socketio and assign it to a variable
var socketIo = require('socket.io');
// sockets are going to listen to the server which is listening on port 8080
var io = socketIo.listen(server);

server.listen(8080);
console.log("listening on port 8080...")