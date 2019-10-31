/**
 * FizzBuzz
 *
 * log all numbers 1 to 100 to console,
 * with the exception of those divisible
 * by 3 and 5.
 *
 * For those divisible by 3 log "Fizz"
 * For those divisible by 5 log "Buzz"
 * For those divisible by both log "FizzBuzz"
 */

for (let x = 1; x < 101; x++) {
  if (!(x % 3) && !(x % 5)) {
    console.log("FizzBuzz");
  } else if (!(x % 3)) {
    console.log("Fizz");
  } else if (!(x % 5)) {
    console.log("Buzz");
  } else {
    console.log(x);
  }
}
