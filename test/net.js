var net = require('net');


// net.createServer(function (con){
// 	con.on('data',function(data){
// 		con.write([
// 			'HTTP/1.1 200 OK',
// 			'Content-Type:text/plain',
// 			'Content-Length:11',
// 			'',
// 			'Hello World'
// 		].join('\n'));
// 	});
// }).listen(3000);

var option = {
	port:80,
	host:'www.baidu.com'
};
var client = net.connect(option,function(){
	client.write([
		'GET/HTTP/1.1',
		'User-Agent:curl/7.26.0',
		'Host:www.baidu.com',
		'Accept:*/*',
		'',
		''
		].join('\n'));
});
client.on('data',function(data){
	console.log(1);
	console.log(data.toString());
	client.end();
})