// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// http://www.elijahmanor.com/reducing-filter-and-map-down-to-reduce/
function countWords(inputWords) {

	return inputWords.reduce(function(count, currentWord){

		count[currentWord] = count[currentWord] + 1 || 1;

		return count;

	}, {}); // initialise count object on first itteration
}

module.exports = countWords;

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    
console.log(countWords(inputWords));


/** OFFICIAL **

function countWords(arr) {
	return arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
		return countMap
	}, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords


************/