var http = require('http');
var zlib = require('zlib')

// http.createServer(function(request,response) {
// 	response.writeHead(200,{'Conten-type':'text/pain'});
// 	// response.end('hello world\n')
// 	// var body = [];
// 	// console.log(request.method);
// 	// console.log(request.headers);
// 	// request.on('data',function(chunt){
// 	// 	body.push(chunt);
// 	// });
// 	// request.on('end',function(){
// 	// 	body = Buffer.concat(body);
// 	// 	console.log(body.toString('utf-8'));
// 	// })
// 	// request.pipe(response);
// 	// request.on('data',function(chunk){
// 	// 	response.write(chunk);
// 	// })
// 	// request.on('end',function(){
// 	// 	response.end();
// 	// })
// 	response.end(request.method);
// }).listen(3000);


var options = {
	hostname:'www.baidu.com',
	port:80,
	path:'/',
	method:'GET',
	// headers{
	// 	'Conten-type':'application/x-www-form-urlencoded'
	// }
};
var request = http.request(options,function(response){
	var body = [];
	response.on('data',function(chunk){
		body.push(chunk);
	});
	response.on('end',function(){
		body = Buffer.concat(body);
		if(response.headers['content-encoding'] === 'gzip'){
			console.log(1);
			zlib.gunzip(body,function(err,data){
				console.log(data.toString());
			});
		}
		else{
			console.log(0);
			var str = body.toString('utf-8')
			console.log(str);
		}
		
	})
});
// request.write('hello world');
request.end();