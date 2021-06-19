function QuestionsMarks(str) { 
  let countQuestionMarks = (from, to) => {
    let sub = str.substring(from+1, to);
    let questionMarks = Array.from(sub.matchAll(new RegExp('[\?]','g')));
    return questionMarks.length;
  };

  let numbers = []; // [[pos, value]]
  for (let i=0; i<str.length; i++) {
    if (str[i].match(/[0-9]/)) {
      numbers.push([i, parseInt(str[i])]);
    }    
  }
  if (numbers.length < 2) {
    return false;
  }

  let hasValidPair = false;
  for(let i=0; i<(numbers.length - 1); i++) {
    let currentNum = numbers[i];
    let nextNum = numbers[i+1];
    if ((currentNum[1] + nextNum[1]) === 10) {
      hasValidPair = true;
      if (countQuestionMarks(currentNum[0], nextNum[0]) !== 3) {
        return false;
      }
    }
  }

  return hasValidPair ? true : false;
}
   
// keep this function call here 
console.log(QuestionsMarks(readline()));