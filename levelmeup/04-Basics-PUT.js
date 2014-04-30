var level = require('level');
var db = level(process.argv[2]);
var data = JSON.parse(process.argv[3]);

for(var k in data){
  db.put(k,data[k]);
}
