// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {};
module.exports = reverse;

// function reverse(str) {
//   let newStr = str;
//   newStr.split('');
//   let temp = '';
//   for (let character of newStr) {
//     temp = character + temp;
//   };
//   newStr = temp;
//   return newStr
// };

// function reverse(str) {
//   const newStr = str.psplit('').reverse().join('');
//   return newStr;
// };

// function reverse(str) {
//   let newStr = str;
//   newStr.split('');
//   let temp = [];
//   for (let i = newStr.length; i >= 0; i--) {
//     temp.push(newStr[i]);
//   };
//   newStr = temp.join('');
//   return newStr
// };

// function reverse(str) {
//   let newStr = str.split('');
//   return newStr.reduce((temp, character) => {
//     return character + temp;
//   }, '');
// };


