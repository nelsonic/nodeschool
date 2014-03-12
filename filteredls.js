var fs = require('fs');

function printFileNamesWithExt(dir, ext) {
	ext = ext.toString();
	fs.readdir(dir, function (err, list) { 
		if(err) console.log(err);
		for(var i = 0; i < list.length; i++){
			var file = list[i].toString()
			if(file.lastIndexOf(ext) === file.length - ext.length && file.length > ext.length) {
				console.log(file);
			}
		}
	});
}

printFileNamesWithExt(process.argv[2], process.argv[3]);