function doubleAll(numbers) {
  var result = numbers.map(function(num){
	return num * 2;
  });
  return result;
}

module.exports = doubleAll;