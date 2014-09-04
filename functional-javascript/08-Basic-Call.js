function duckCount() {
  // SOLUTION GOES HERE
  // console.dir(arguments);
  var count = Array.prototype.slice.call(arguments).filter(function(entry){
    // console.log(entry);
    return Object.prototype.hasOwnProperty.call(entry, 'quack');
  }).length;
  // console.log(count);
  return count;
}

// console.log( duckCount({quack:'this'},{quack:false},{quack:true},{}) );

/** official:

function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

**/

module.exports = duckCount;
