/**
 * Write a function that returns the minimum
 * of two given values
 */
const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

console.log(min(0, 10));

console.log(min(0, -10));
