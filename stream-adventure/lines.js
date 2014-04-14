var through = require('through');
var split = require('split');
var lineCount = 0;
var tr = through(function (buf) {
	var line = buf.toString();
	// console.log(line);
	if(lineCount%2 === 0){
		line = line.toLowerCase();
		
	} else {
		line = line.toUpperCase();
	}
	lineCount++;
    this.queue(line + '\n');
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
// process.stdin
//     .pipe(split())
//     .pipe(through(function (line) {
//         console.dir(line.toString());
//     }));