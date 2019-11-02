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

const listToArray = list => {
  let array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
};

const prepend = (value, list) => {
  return {
    value,
    rest: list
  };
};

const nth = (list, n) => {
  if (list == null) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    list = list.rest;
    n -= 1;
    return nth(list, n);
  }
};

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([10, 20, 30])));

let a = arrayToList([1, 2, 3, 4, 5]);
console.log(a);
console.log(prepend(0, a));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([0, 1, 2, 3, 4, 5]), 8));
