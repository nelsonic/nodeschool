var level = require('level');
var db = level(process.argv[2]);

for(var i = 0; i < 101; i++){
  get(i);
}

function get(i){
  // console.log(i);
  var key = 'key'+i;
  db.get(key, function handle(err, value){
    if(err){
      // do nothing
    } else {
      console.log(key+"="+value);
    }
  });
}
