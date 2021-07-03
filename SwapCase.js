/**
 * Have the function SwapCase(str) take the str parameter and swap the
 * case of each character. For example: if str is "Hello World" the
 * output should be hELLO wORLD. Let numbers and symbols stay the way they are.
 */

function SwapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!/[a-z]/i.test(str[i])) {
      result += str[i];
      continue;
    }

    const charCode = str.charCodeAt(i);
    if (charCode >= 97) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += String.fromCharCode(charCode + 32);
    }
  }
  return result;
}

// keep this function call here
console.log(SwapCase(readline()));
