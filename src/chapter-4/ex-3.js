/**
 * A List
 *
 * Create a data structure list object that holds a
 * value and a reference to the rest/next of the list.
 *
 *  list = {
 *    value: 1,
 *    rest: {
 *      value: 2,
 *      rest: {
 *        value: 3,
 *        rest: null
 *      }
 *    }
 *  };
 *
 * Write a function arrayToList that creates the above when
 * given an array argument.
 *
 * Write a function listToArray that creates an array
 * from a list.
 *
 * Write a function 'prepend', which takes a value and
 * adds it to the front of a list.
 *
 * Write a function 'nth' which takes a list and a number
 * and returns the element at the given position of
 * the list. (0 indexed). return 'undefined' if not there
 *
 * Make 'nth' recursive if not already.
 */

const arrayToList = array => {
  let list;

  array.reverse();

  array.forEach(element => {
    list = { value: element, rest: list };
  });

  return list;
};

const listToArray = list => {};

const prepend = (value, list) => {};

const nth = (list, n) => {};

console.log(arrayToList([1, 2, 3]));
