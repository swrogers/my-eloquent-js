/**
 * Reversing an array
 *
 * Write two functions:
 *  reverseArray - takes an array as an argument and
 *    produces a new inversed array.
 *  reverseArrayInPlace - modifies the array given by
 *    reversing its elements.
 *
 * Do not use the standard 'reverse' method.
 */

const reverseArray = array => {
  let revArray = [];

  array.forEach(element => {
    revArray.unshift(element);
  });

  return revArray;
};

// Will swap the beginning with the end items
// Only need to go halfway through the
// array
const reverseArrayInPlace = array => {
  const stop = Math.floor(array.length / 2);
  let arrayEnd = array.length - 1;
  let temp;

  for (let i = 0; i < stop; i++) {
    temp = array[arrayEnd];
    array[arrayEnd] = array[i];
    array[i] = temp;

    arrayEnd -= 1;
  }

  return array;
};

console.log(reverseArray([0, 1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));

console.log(reverseArrayInPlace([0, 1, 3, 4]));
console.log(reverseArrayInPlace([0, 1, 3, 4, 5]));
