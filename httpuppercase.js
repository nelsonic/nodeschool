var http = require('http');

var server = http.createServer().listen(Number(process.argv[2]))

server.on('request', function(req, res) {
	if(req.method !== 'POST') {
		return res.end('Only Accept Post');
	}
	var str = ''
	req.on('data', function(chunk){
		str = str + chunk;
	})
	req.on('end', function(){
		res.end(str.toUpperCase());
	})
});

