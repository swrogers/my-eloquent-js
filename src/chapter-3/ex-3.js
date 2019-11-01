/**
 * Bean counting
 *
 * Write a function 'countBs' that takes a string
 * as its only parameter and returns a number
 * indicating the amount of capital B's that are present.
 *
 * Then write a function countChar that is similar but
 * also takes the character to be counted.
 */

const countBs = string => {
  let count = 0;
  [...string].forEach(letter => {
    if (letter === "B") {
      count += 1;
    }
  });

  return count;
};

const countChar = (string, char) => {
  let count = 0;
  [...string].forEach(letter => {
    if (letter === char) {
      count += 1;
    }
  });

  return count;
};

console.log(countBs("BBC"));
console.log(countBs("bbcaaB"));

console.log(countChar("kakkerlak", "k"));
console.log(countChar("blahsay", "x"));
