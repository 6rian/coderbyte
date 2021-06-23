/**
 * Have the function NumberEncoding(str) take the str parameter and encode
 * the message according to the following rule: encode every letter into its
 * corresponding numbered position in the alphabet. Symbols and spaces will
 * also be used in the input. For example: if str is "af5c a#!" then your
 * program should return 1653 1#!.
 */
function NumberEncoding(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let c = str[i].toLowerCase();
    if (/[a-z]/.test(c)) {
      let pos = alphabet.indexOf(c) + 1;
      result += pos;
    } else {
      result += str[i];
    }
  }

  return result;
}

// keep this function call here
console.log(NumberEncoding(readline()));
