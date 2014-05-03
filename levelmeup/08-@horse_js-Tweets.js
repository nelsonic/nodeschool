module.exports = function (db, day, callback) {
  var tweets = [];
  // see: https://github.com/rvagg/node-levelup/issues/118
  db.createReadStream({ start: day, end: day  + '\xff' })
    .on('data', function (data) {
      tweets.push(data.value);
    })
    .on('end', function () {
      if (callback) {
        callback(null, tweets);
      }
    });
};
