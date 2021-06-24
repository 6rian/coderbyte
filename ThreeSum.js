/**
 * Have the function ThreeSum(arr) take the array of integers stored in arr,
 * and determine if any three distinct numbers (excluding the first element)
 * in the array can sum up to the first element in the array. For example: if
 * arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three sets of
 * triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1].
 * Your program should return the string true if 3 distinct elements sum to the
 * first element, otherwise your program should return the string false. The
 * input array will always contain at least 4 elements.
 */
function ThreeSum(arr) {
  const combinations = (arr) => {
    if (arr.length === 0) return [[]];
    const first = arr.shift();
    const combsWithoutFirst = combinations(arr);
    const combsWithFirst = [];

    combsWithoutFirst.forEach((c) => {
      combsWithFirst.push([...c, first]);
    });

    return [...combsWithoutFirst, ...combsWithFirst];
  };

  const combinationsOfThree = (allCombs) => {
    return allCombs.filter((c) => c.length === 3);
  };

  const sumArray = (arr) => {
    let sum = 0;
    arr.forEach((i) => (sum += i));
    return sum;
  };

  const shrinkArray = (arr) => {
    // limit 3 occurrences of any value to reduce combinations
    arr.sort();
    let newArr = [];
    let current = arr[0];
    let occurrences = 1;
    while (arr.length) {
      let c = arr.shift();
      if (current === c) {
        occurrences++;
        if (occurrences <= 3) newArr.push(c);
      } else {
        current = c;
        occurrences = 1;
        newArr.push(c);
      }
    }
    return newArr;
  };

  const target = arr.shift();
  arr = shrinkArray(arr);
  const combs = combinations(arr);
  const combsOfThree = combinationsOfThree(combs);
  let match = false;
  combsOfThree.forEach((c) => {
    if (sumArray(c) === target) {
      match = true;
      return;
    }
  });
  return match;
}

// keep this function call here
console.log(ThreeSum(readline()));
