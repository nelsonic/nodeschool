var level = require('level');

level(process.argv[2], function (err, db) {
  // uses https://github.com/rvagg/node-levelup#createReadStream
  db.createReadStream().on('data', function (data) {
    console.log(data.key+'='+data.value);
  })
});
