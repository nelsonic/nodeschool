var http = require('http');

var server = http.createServer().listen(Number(process.argv[2]))

server.on('request', function(req, res) {
	if(req.method !== 'GET') {
		return res.end('Sorry, we only accept GET requests');
	}
	// console.log(req.url);
	var path = req.url.split('?')[0],
		ds = req.url.split('=')[1];

	res.writeHead(200, { 'Content-Type': 'application/json' })
	if(path === '/api/parsetime'){
		res.end( JSON.stringify(dateFromTimeString(ds)) )
	}
	else if(path === '/api/unixtime') {
		var uts = { "unixtime": new Date(Date.parse(ds)).getTime() }
		res.end( JSON.stringify(uts)  )
	}
});

function dateFromTimeString(ds){
	var D = new Date(Date.parse(ds)) ;
	return {
		"hour"  : D.getHours(),
		"minute": D.getMinutes(),
		"second": D.getSeconds()
	};
}