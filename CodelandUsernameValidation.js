function CodelandUsernameValidation(str) { 

  let alphaRx = /[A-Za-z]+/;
  let allowedCharsRx = /[A-Za-z0-9_]+/;

  if (str.length < 4 || str.length > 25) {
    return false;
  }

  if (!str.substr(0,1).match(alphaRx)) {
    return false;
  }

  if (!str.match(allowedCharsRx)) {
    return false;
  }

  if (str.endsWith('_')) {
    return false;
  }

  return true; 
}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));