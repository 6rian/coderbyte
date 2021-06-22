/**
 * Have the function SimplePassword(str) take the str parameter being passed and
 * determine if it passes as a valid password that follows the list of constraints:
 *
 * 1. It must have a capital letter.
 * 2. It must contain at least one number.
 * 3. It must contain a punctuation mark or mathematical symbol.
 * 4. It cannot have the word "password" in the string.
 * 5. It must be longer than 7 characters and shorter than 31 characters.
 *
 * If all the above constraints are met within the string, the your program should
 * return the string true, otherwise your program should return the string false.
 * For example: if str is "apple!M7" then your program should return "true".
 */

function SimplePassword(str) {
  // contains a capital letter
  if (!/[A-Z]/g.test(str)) return false;

  // contains at least one number
  if (!/[0-9]/g.test(str)) return false;

  // contains a punctuation mark or math symbol
  if (!/[!+.?,=*%-]/g.test(str)) return false;

  // cannot contain "password"
  if (/password/gi.test(str)) return false;

  // length is > 7 and < 31
  if (str.length <= 7 || str.length >= 31) return false;

  return true;
}

// keep this function call here
console.log(SimplePassword(readline()));
