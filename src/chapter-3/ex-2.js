/**
 * Function recursion
 *
 * Zero is even
 * One is odd
 * For any other number N, its evenness is the same as N-2
 *
 * Define a recursive function isEven that uses the above
 * rule and accepts a single positive whole number
 * parameter and returns a boolean.
 */

const isEven = N => {
  if (N >= 0) {
    if (N === 0) {
      return true;
    } else if (N === 1) {
      return false;
    } else {
      return isEven(N - 2);
    }
  } else {
    console.log("N must be a postive integer!");
  }
};

console.log(isEven(10));
console.log(isEven(75));
console.log(isEven(-1));
