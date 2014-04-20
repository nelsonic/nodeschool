var trumpet = require('trumpet')();
var through = require('through');

var loud = trumpet.select('.loud').createStream();
loud.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(trumpet).pipe(process.stdout);