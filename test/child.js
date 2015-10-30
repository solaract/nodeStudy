var process = require('process');

process.on('SIGTERM',function(){
	console.log('exit');
	cleanUp();
	process.exit();
})