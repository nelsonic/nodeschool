var http = require('http');

var server = http.createServer().listen(Number(process.argv[2]))

server.on('request', function(req, res) {
	var str = ''
	req.on('data', function(chunk){
		str = str + chunk;
	})
	req.on('end', function(){
		res.end(str.toUpperCase());
	})
});

