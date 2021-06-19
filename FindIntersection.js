function FindIntersection(strArr) { 
  let arrs = strArr.map(a => a.split(', '));
  let result = [];
  arrs[0].forEach(a => {
    if (arrs[1].includes(a)) {
      result.push(a);
    }
  });
  return result.length ? result.join(',') : false;
}
   
// keep this function call here 
console.log(FindIntersection(readline()));