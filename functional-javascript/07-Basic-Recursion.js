// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// http://www.elijahmanor.com/reducing-filter-and-map-down-to-reduce/
/*
function countWords(inputWords) {

	return reduce(inputWords, function(count, currentWord){

		count[currentWord] = count[currentWord] + 1 || 1;

		return count;

	}, {}); // initialise count object on first itteration
}

module.exports = countWords;

// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    
// console.log(countWords(inputWords));



function reduce(arr, cb, count) {
	console.log(count);

	if(typeof cb !== 'undefined' && typeof cb !== 'function'){
		cb();
	}
	
	if(count < arr.length){
		reduce(arr, cb, count++);
	} else {
		
		return;
	}
}




// => 6
reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr;
}, 0);




/** OFFICIAL ** (Confusing as F***! ) **/

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce


/************/