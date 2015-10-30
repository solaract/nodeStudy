var fs = require('fs');
var path = require('path');


// function copy(src,dst){
// 	// fs.writeFileSync(dst,fs.readFileSync(src));
// 	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
// }

// function main(argv){
// 	copy(argv[0],argv[1]);
// }
// // console.log(./test1.txt)
// // main('./test1.txt','./test2.txt');




var src = path.normalize('txt/test1.txt');
var dst = path.normalize('txt/test2.txt');
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);
// rs.on('data',function(chunk){
// 	rs.pause();
// 	doSomething(chunk,function(){
// 		rs.resume();
// 	});
// });
// re.on('end',function(){
// 	cleanUp();
// });
rs.on('data',function(chunk){
	if(ws.write(chunk) === false){
		rs.pause();
	}
});
rs.on('end',function(){
	ws.end();
});
ws.on('drain',function(){
	rs.resume();
});