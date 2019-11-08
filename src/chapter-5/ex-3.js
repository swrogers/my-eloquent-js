/**
 * Everything
 *
 * Like the 'some' method, arrays also have an 'every' method. The 'every'
 * method returns true when a given function is true for every element
 * in the array. So, 'some' ~ '||' and 'every' ~ '&&'.
 *
 * Implement "every" as a function that takes an array and a function.
 * Write two version, one using a loop and one using the 'some' method.
 *
 * console.log(every([1,3,5], n => n < 10)); --> true
 * console.log(every([2,4,16], n => n < 10)); --> false
 * console.log(every([], n => n < 10)); --> true
 *
 */

const every = (array, testFunc) => {
  let truth = true;

  array.forEach(element => {
    if (!testFunc(element)) {
      truth = false;
    }
  });

  return truth;
};

// Use DeMorgan's Law:
// (A && B) === !(!A || !B),
// so, run through all NOT elements...
// return the NOT of that
const everySome = (array, testFunc) => {
  return !array.some(element => !testFunc(element));
};

console.log(every([1, 2, 3], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log("SOME version:");
console.log(everySome([1, 2, 3], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));
