/**
 * The sum of a range
 *
 * Write a range function that takes two args: start and end
 * return an array containing number from start to
 * end inclusive.
 *
 * Next write a sum functions that takes an array of
 * numbers and returns the sum of the numbers.
 *
 * Modify range function to take an optional third
 * argument that indicates the 'step' value to use
 * when building array. Default to 1. Ensure it works
 * with negative step values. Only positive integers
 * should be in the returned array.
 */

const range = (start, end, step = 1) => {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
};

const sum = array => {
  let total = 0;
  [...array].forEach(current => {
    total += current;
  });

  return total;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(0, 10, 2));
console.log(range(20, 0, -5));

console.log(sum(range(1, 10)));
