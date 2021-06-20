/**
 * Have the function VowelCount(str) take the str string parameter
 * being passed and return the number of vowels the string contains (ie. "All
 * cows eat grass and moo" would return 8). Do not count y as a vowel for this
 * challenge.
 */

function VowelCount(str) { 
  let vowelsRx = /[aeiou]{1}/gi;
  let count = str.match(vowelsRx);
  return count ? count.length : 0;
}
   
// keep this function call here 
console.log(VowelCount(readline()));