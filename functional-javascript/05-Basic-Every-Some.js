function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
		return goodUsers.every(function(elem, index, array){
			// console.log('                        '+index);
			// console.dir(elem);
			return goodUsers.some(function(elem2, index2, array2){
				// console.log('                        '+index2);
				// console.dir(elem2.id +' === ' + elem.id);
				return elem2.id === elem.id;
			});
		});
	};
}

var goodUsers = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 }
];

var testAllValid = checkUsersValid(goodUsers);

// console.log(testAllValid);
    
var res1 = testAllValid([
      { id: 2 },
      { id: 1 }
]);

// console.log(res1);
    
var res2 = testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
]);

// console.log(res2);

module.exports = checkUsersValid;