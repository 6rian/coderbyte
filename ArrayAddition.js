/**
 * Have the function ArrayAddition(arr) take the array of numbers
 * stored in arr and return the string true if any combination of
 * numbers in the array (excluding the largest number) can be added
 * up to equal the largest number in the array, otherwise return the
 * string false. For example: if arr contains [4, 6, 23, 10, 1, 3]
 * the output should return true because 4 + 6 + 10 + 3 = 23. The
 * array will not be empty, will not contain all the same elements,
 * and may contain negative numbers.
 */

function combinations(arr) {
  if (arr.length === 0) return [[]];
  const first = arr.shift();
  const left = combinations(arr);
  const right = [];
  left.forEach(c => {
    right.push([...c, first]);
  });
  return [...left, ...right];
}

function ArrayAddition(arr) {
  // determine largest number and remove it from array
  let largest = arr[0];
  arr.forEach(i => largest = i>largest ? i : largest);
  arr.splice(arr.indexOf(largest), 1);

  const combs = combinations(arr);
  const sumCombination = (sum, current) => sum + current;
  for (let i=0; i<combs.length; i++) {
    if (combs[i].length === 0) continue;
    if (combs[i].reduce(sumCombination) === largest) return true;
  }

  return false;
}
   
// keep this function call here 
console.log(ArrayAddition(readline()));