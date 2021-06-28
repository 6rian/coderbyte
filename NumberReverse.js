/**
 * Have the function NumberReverse(str) take the str parameter being
 * passed which will be a string of numbers, and return a new string
 * with the numbers in reverse order.
 */

function NumberReverse(str) {
  const arr = str.split(' ');
  arr.reverse();
  return arr.join(' ');
}

// keep this function call here
console.log(NumberReverse(readline()));
