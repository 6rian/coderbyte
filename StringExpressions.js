/**
 * Have the function StringExpression(str) read the str parameter being passed
 * which will contain the written out version of the numbers 0-9 and the words
 * "minus" or "plus" and convert the expression into an actual final number
 * written out as well. For example: if str is "foursixminustwotwoplusonezero"
 * then this converts to "46 - 22 + 10" which evaluates to 34 and your program
 * should return the final string threefour. If your final answer is negative it
 * should include the word "negative."
 */
function StringExpression(str) {
  var numbers = [
    { literal: '0', text: 'zero' },
    { literal: '1', text: 'one' },
    { literal: '2', text: 'two' },
    { literal: '3', text: 'three' },
    { literal: '4', text: 'four' },
    { literal: '5', text: 'five' },
    { literal: '6', text: 'six' },
    { literal: '7', text: 'seven' },
    { literal: '8', text: 'eight' },
    { literal: '9', text: 'nine' },
  ];
  var operators = [
    { literal: '+', text: 'plus' },
    { literal: '-', text: 'minus' },
  ];

  numbers.forEach((n) => {
    let numRx = new RegExp(`${n.text}`, 'g');
    str = str.replace(numRx, n.literal);
  });
  operators.forEach((o) => {
    let opRx = new RegExp(`${o.text}`, 'g');
    str = str.replace(opRx, o.literal);
  });

  let result = eval(str) + '';
  result = result.replace('-', 'negative');
  numbers.forEach((n) => {
    let numRx = new RegExp(`${n.literal}`, 'g');
    result = result.replace(numRx, n.text);
  });
  return result;
}

// keep this function call here
console.log(StringExpression(readline()));
