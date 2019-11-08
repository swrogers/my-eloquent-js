/**
 * Flattening
 *
 * Use the 'reduce' method with the 'concat' method
 * to "flatten" an array of arrays into a single
 * array
 *
 * [[1,2,3],[4,5],[6]] ==> [1,2,3,4,5,6]
 */

let arrays = [[1, 2, 3], [4, 5], [6]];
let newArray = [];

newArray = arrays.reduce((acc, curr) => {
  return acc.concat(curr);
});

console.log(newArray);
