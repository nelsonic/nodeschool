module.exports = function (db, date, callback) {
  var count = 0;
  db.createReadStream({start:date  })
    .on('data', function(data){
      count++;
    })
    .on('end', function(){
      if(typeof callback === 'function'){
        callback(null, count);
      }
    });
};
