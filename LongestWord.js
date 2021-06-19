function LongestWord(sen) { 
  let words = sen.split(' ');
  let longest = '';

  words.forEach(word => {
    let wordWithoutPunctuation = word.match(/[A-Za-z0-9]+/)[0];
    if (wordWithoutPunctuation.length > longest.length) {
      longest = wordWithoutPunctuation;
    }
  });
  return longest;  
}
   
// keep this function call here 
console.log(LongestWord(readline()));