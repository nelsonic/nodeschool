var http = require('http');
// *anything* to avoid using async module!
// store both the url, results and status
var q = [
	{
		url: process.argv[2],
		str: '',
		done: false
	},
	{
		url: process.argv[3],
		str: '',
		done: false
	},
	{
		url: process.argv[4],
		str: '',
		done: false
	}
];

q.forEach(function(i){

	http.get(i.url, function(response){
		response.setEncoding('utf8');
		response.on('data', function(chunk){
			i.str = i.str + chunk;
		})
		response.on('end', function(){
			i.done = true;
			if(q[0].done === true && q[1].done === true && q[2].done === true){
				printResponses();
			}
		});
		response.on('error',console.error)
	})
})

function printResponses(){
	q.forEach(function(i){
		console.log(i.str);
	})
}