function async(fn,cb){
	try{
		cb(null,fn());
	}
	catch(err){
		cb(err);
	}
};
async(null,function(err,data){
	if(err){
		console.log('Error:%s',err.message);
	}
	else{
		console.log(1111);
	}
})