var trumpet = require('trumpet')(); // https://github.com/substack/node-trumpet
var through = require('through');

var loud = trumpet.select('.loud').createStream();
loud.pipe(through(function (buffer) {
    this.queue(buffer.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(trumpet).pipe(process.stdout);