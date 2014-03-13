var mymodule = require('./mymodule.js')

// process.argv[2]
// process.argv[3]

mymodule(process.argv[2], process.argv[3], function(err, list){
	list.forEach(function(file){
		console.log(file);
	})
})