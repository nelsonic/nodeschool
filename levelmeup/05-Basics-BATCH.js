var level = require('level');
var db = level(process.argv[2]);
var fs = require('fs');
var file = fs.readFileSync(process.argv[3], 'utf8');
var lines = file.split('\n');
var ops = [];

for(var line in lines){

  var data = line.split(',');

  if(data[0] === 'put'){
    var op = {
      "type" : data[0],
      "key"  : data[1],
      "value": data[2]
    };
  } else {
    var op = {
      "type" : data[0],
      "key"  : data[1]
    };
  }

  ops.push(op);
}

db.batch(ops, function (err) {
  if (err) return console.log('Ooops!', err);
  console.log('Great success dear leader!');
});
