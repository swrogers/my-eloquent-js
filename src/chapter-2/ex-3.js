/**
 * Exercise 3
 * Chessboard
 *
 * Print out to the console the following:
 * " # # # #"
 * "# # # # "
 * ...
 * ...
 *
 * Then do it for a "size" parameter
 */
const size = 8;
let line = "";

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    //The "even" squares get a space
    // "odd" squares get a hashmark
    (x + y) % 2 ? (line += "#") : (line += " ");
  }
  console.log(line);
  line = "";
}
