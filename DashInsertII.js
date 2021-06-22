/**
 * Have the function DashInsertII(str) insert dashes ('-') between each
 * two odd numbers and insert asterisks ('*') between each two even numbers
 * in str. For example: if str is 4546793 the output should be 454*67-9-3.
 * Don't count zero as an odd or even number.
 */

function DashInsertII(num) {
  let isZero = (n) => {
    return n === '0';
  };

  let isOdd = (n) => {
    return n % 2;
  };

  let isEven = (n) => {
    return !isOdd(n);
  };

  let str = String(num);
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    result += current;

    // break if at the end of string
    if (i == str.length - 1) break;

    let next = str[i + 1];

    // don't count zero as even or odd
    if (isZero(current) || isZero(next)) continue;

    if (isOdd(current) && isOdd(next)) {
      result += '-';
    } else if (isEven(current) && isEven(next)) {
      result += '*';
    }
  }

  return result;
}

// keep this function call here
console.log(DashInsertII(readline()));
