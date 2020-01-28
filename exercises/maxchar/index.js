// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const newStr = str.split('').sort();
  let mostChar = '';
  let tempNum = '';
  let currentChar = '';
  let currentNum = '';
  console.log(newStr);
  for (let i = 0; i < newStr.length; i++){
    
  }
}

module.exports = maxChar;


// create acumulator(newStr)
