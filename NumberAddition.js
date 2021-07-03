/**
 * Have the function NumberAddition(str) take the str parameter,
 * search for all the numbers in the string, add them together,
 * then return that final number. For example: if str is "88Hello
 * 3World!" the output should be 91. You will have to differentiate
 * between single digit numbers and multiple digit numbers like in
 * the example above. So "55Hello" and "5Hello 5" should return two
 * different answers. Each string will contain at least one letter
 * or symbol.
 */

function NumberAddition(str) { 
  let numbers = str.match(/[\d]{1,2}/g);
  if (!numbers) return 0;
  numbers = numbers.map(n => parseInt(n));
  return numbers.reduce((sum, val) => sum += val);
}
   
// keep this function call here 
console.log(NumberAddition(readline()));