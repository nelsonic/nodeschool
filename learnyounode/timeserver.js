var net = require('net')

// zeroFill day/month/hour/min/sec lower than 9
function zeroFill(n){
	if(n > 9){
		return n.toString();
	} else {
		return '0'+n.toString();
	}
}

// print date in format "YYYY-MM-DD hh:mm"
function printDate(){
	var D = new Date(),
	YYYY  = zeroFill(D.getFullYear()),
	MM    = zeroFill(D.getMonth() + 1),
	DD    = zeroFill(D.getDate()),
	hh    = zeroFill(D.getHours()),
	mm    = zeroFill(D.getMinutes());
	return YYYY+'-'+MM+'-'+DD+' '+hh+':'+mm+'\n';
}

var server = net.createServer(function (socket) {
  socket.end( printDate() );
})
server.listen(process.argv[2]);