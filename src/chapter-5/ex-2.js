/**
 * Your Own Loop
 *
 * Write a function 'loop' that imitates a 'for' loop.
 * It should take a "value", "test function", "update
 * function" and a "body function".
 *
 * Each iteration, first run the test function on the
 * current loop value, stop if false. Then call body
 * function passing in the current value. Finally call
 * the update function to create a new value and start
 * from the beginning.
 *
 * loop(3, n => n > 0, n => n - 1, console.log)
 * ===> 3, 2, 1
 */

const loop = (value, testFunc, updateFunc, bodyFunc) => {
  while (testFunc(value)) {
    bodyFunc(value);
    value = updateFunc(value);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
