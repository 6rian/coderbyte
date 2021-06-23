/**
 * Have the function DashInsert(str) insert dashes ('-') between each two odd
 * numbers in str. For example: if str is 454793 the output should be 4547-9-3.
 * Don't count zero as an odd number.
 */

function DashInsert(str) {
  let isOdd = (n) => {
    return n % 2;
  };

  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    newStr += current;

    if (i == str.length - 1) {
      break;
    }

    let next = str[i + 1];
    if (isOdd(current) && isOdd(next)) {
      newStr += '-';
    }
  }

  return newStr;
}

// keep this function call here
console.log(DashInsert(readline()));
