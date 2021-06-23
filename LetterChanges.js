/**
 * Have the function LetterChanges(str) take the str parameter being passed
 * and modify it using the following algorithm. Replace every letter in the
 * string with the letter following it in the alphabet (ie. c becomes d, z
 * becomes a). Then capitalize every vowel in this new string (a, e, i, o, u)
 * and finally return this modified string.
 */
function LetterChanges(str) {
  let shiftAlphaChar = (c) => {
    if (!/[a-z]/.test(c)) return c;
    return String.fromCharCode(c.charCodeAt() + 1);
  };

  let arr = Array.from(str);
  arr = arr.map((c) => shiftAlphaChar(c));
  str = arr.join('');

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  vowels.forEach((v) => {
    let capitalV = String.fromCharCode(v.charCodeAt() - 32);
    let vRx = new RegExp(`[${v}]`, 'g');
    str = str.replace(vRx, capitalV);
  });

  return str;
}

// keep this function call here
console.log(LetterChanges(readline()));
