// try it in your command terminal with: 
// node httpclient http://en.wikipedia.org/wiki/Nodejs
var http = require('http');

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.on('data', function(chunk){
		console.log(chunk);
	})
	response.on('error', function(err){
		console.log('\n\nFail: ',err);
	})
})