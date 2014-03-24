var fs = require('fs'),
  http = require('http'),
  port = process.argv[2],
  file = process.argv[3];

var server = http.createServer(function(req,res){
	var rs = fs.createReadStream(file);
	rs.on('data', function(chunk){
		res.write(chunk);	
	})
	rs.on('end', function(){
		res.end();
	})
});

server.listen(port);