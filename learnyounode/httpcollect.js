// try it in your command terminal with: 
// node httpclient http://en.wikipedia.org/wiki/Nodejs
var http = require('http');

http.get(process.argv[2], function(response){
	var str = '';
	response.setEncoding('utf8');
	response.on('data', function(chunk){
		str = str + chunk;
	})
	response.on('error', function(err){
		console.log('\n\nFail: ',err);
	})
	response.on('end', function(){
		console.log(str.length);
		console.log(str);
	})
})