var fs = require('fs'),
  path = require('path');

module.exports = function(dir, ext, callback){
	fileList = [];
	fs.readdir(dir, function (err, list) {
	  if(err)
	  	return callback(err);
	  list.forEach(function (file) {
	    if (path.extname(file) === '.' + ext)
	      fileList.push(file);
	  });
	  if(typeof callback !== 'undefined') {
	  	callback(null, fileList);
	  }
	});
}
