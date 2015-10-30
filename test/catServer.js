var fs = require('fs'),
	path = require('path'),
	http = require('http');
	
var MIME = {
	'.css':'text/css',
	'.js':'application/javascript'
};

function combineFiles(pathnames,cb){
	var output = [];
	(function next(i,len){
		if(i < len){
			fs.readFile(pathnames[i],function(err,data){
				if(err){
					cb(err);
				}
				else{
					output.push(data);
					next(i+1,len);
				}
			})
		}
		else{
			cb(null,Buffer.concat(output));
		}
	})(0,pathnames.length);
}

