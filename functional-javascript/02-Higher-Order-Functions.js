function repeat(operation, num) {
	for(var i = 0; i < num; i++){
		operation();
	}
}

// official solution:
// function repeat(operation, num) {
// 	if (num <= 0) return;
// 	operation();
// 	return repeat(operation, --num);
// }

// Do not remove the line below
module.exports = repeat;