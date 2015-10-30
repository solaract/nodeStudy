var fs = require('fs');
var path = require('path');

var dir = path.normalize('../test');
// function traval(dir,callback){
// 	fs.readdirSync(dir).forEach(function(file){
// 		var pathname = 	path.join(dir,file);
// 		if(fs.statSync(pathname).isDirectory()){
// 			traval(pathname,callback);
// 		}
// 		else{
// 			callback(pathname);
// 		}
// 	});
// }
// function traval(dir,callback,finish){
// 	fs.readdir(dir,function(err,files){
// 		(function next(i){
// 			console.log(i);
// 			if(i<files.length){
// 				var pathname = path.join(dir,files[i]);
// 				fs.stat(pathname,function(err,stats){
// 					if(stats.isDirectory()){
// 						traval(pathname,callback);
// 						console.log('hhhhhhh');
// 						next(i+1);
// 					}else{  
// 						callback(pathname);
// 						next(i+1);
// 					}
// 				});
// 			}else{
// 				finish&&finish();
// 			}	
// 		}(0))
// 	})
// }

// traval(dir,
// 	function(pathname,cb){
// 		console.log(pathname);
// 		// cb();
// 	},
// 	function(){
// 		console.log('finish')});


var pn = path.normalize('./txt/test2.txt');
function replace(pathname){
	var str = fs.readFileSync(pathname,'binary');
	str = str.replace('foo','bar');
	console.log(str);
	fs.writeFileSync(pathname,str,'binary');
}
replace(pn);