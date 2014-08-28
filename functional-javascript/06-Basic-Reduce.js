// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// http://www.elijahmanor.com/reducing-filter-and-map-down-to-reduce/
function countWords(inputWords) {
	var count = {};
	inputWords.reduce(function(previousValue, currentValue, index, array){

		if(index === 1) {
			count[array[0]] = 1;
		}
		if(count[array[index]] > 0) {
			count[array[index]]++;
		}
		else {
			count[array[index]] = 1;
		}

		return currentValue;
	});
	return count;
}

module.exports = countWords;

// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    
// console.log(countWords(inputWords));


/** OFFICIAL **

function countWords(arr) {
	return arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
		return countMap
	}, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords


************/