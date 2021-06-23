/**
 * Have the function ABCheck(str) take the str parameter being passed and return
 * the string true if the characters a and b are separated by exactly 3 places
 * anywhere in the string at least once (ie. "lane borrowed" would result in true
 * because there is exactly three characters between a and b). Otherwise return
 * the string false.
 */

function ABCheck(str) {
  let abRx = /[a|b]{1}[\w ]{3}[a|b]{1}/gi;
  return abRx.test(str);
}

// keep this function call here
console.log(ABCheck(readline()));
