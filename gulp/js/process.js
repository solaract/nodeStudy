var child_process = require('child_process');
var util = require('util');
var path = require('path');

// function copy(source,target,cb){
// 	child_process.exec(
// 		util.format('cp -r %s*%s',source,target),cb);
// };
// var source = path.normalize('./txt/test1.txt');
// var target = path.normalize('./txt/test2.txt');
// copy(source,target,function(err){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log('success');
// 	}
// })

var child = child_process.spawn('node',['child.js']);
child.kill('SIGTERM');