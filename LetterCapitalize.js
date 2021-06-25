/**
 * Have the function LetterCapitalize(str) take the str parameter being
 * passed and capitalize the first letter of each word. Words will be
 * separated by only one space.
 */

function LetterCapitalize(str) { 
  let arr = str.split(' ');
  let resultArr = [];
  arr.forEach(s => {
    resultArr.push(s[0].toUpperCase() + s.substring(1));
  });
  return resultArr.join(' ');
}
   
// keep this function call here 
console.log(LetterCapitalize(readline()));