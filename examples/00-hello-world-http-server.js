var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(port = 3000);

console.log('Server running at http://127.0.0.1:'+port);

// see: http://nodejs.org/api/synopsis.html