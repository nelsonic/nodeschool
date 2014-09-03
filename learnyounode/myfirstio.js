var fs = require('fs');
var path = process.argv[2];
// console.log("path", path);
var data = fs.readFileSync(path);
var lines = data.toString().split('\n');
console.log(lines.length - 1);