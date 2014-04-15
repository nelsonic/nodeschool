var concat = require('concat-stream');
var rev = concat(function (buf) {
	console.log(buf.toString().split('').reverse().join(''));
});
process.stdin.pipe(rev);