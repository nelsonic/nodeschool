var fs = require('fs');
var level = require('level');

// read file and split into an array of lines
var file = fs.readFileSync(process.argv[3], 'utf8');
var lines = file.split('\n');

level(process.argv[2], function (err, db) {

  var batch = db.batch();
  lines.forEach(function (line) {
    var d = line.split(',');
    if (d[0] == 'del') {
      return batch.del(d[1]);
    } else {
      batch.put(d[1], d[2]);
    }
  });
  batch.write();
});
