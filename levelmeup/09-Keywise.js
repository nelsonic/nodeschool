// var level = require('level');
// // var fs = require('fs');
// var db = level(process.argv[2], { valueEncoding: 'json' });

// var json = require(process.argv[3]); // JSON.parse(file);
// // console.log(json);
// var batch = db.batch();

// json.forEach(function(rec){
// 	if(rec.type == 'user'){
// 		batch.put({"key":rec.name, "value": rec});
// 	} else if (rec.type == 'repo') {
// 		batch.put({"key":rec.user+'!'+rec.name, "value": rec});
// 	}
// });
// batch.write();

var level = require('level')
var db = level(process.argv[2], { valueEncoding: 'json' })
var data = require(process.argv[3])
var operations = data.map(function (row) {
  var key
  if (row.type == 'user')
    key = row.name
  else if (row.type == 'repo')
    key = row.user + '!' + row.name
  return { type: 'put', key: key, value: row }
})

db.batch(operations)