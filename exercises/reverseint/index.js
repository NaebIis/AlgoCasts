// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) { };

module.exports = reverseInt;

// function reverseInt(n) {
//   if (Math.sign(n) === -1) {
//     let temp = parseInt(n.toString().split('').reverse().join(''));
//     temp = temp - (temp * 2);
//     return temp
//   } else {
//     return parseInt(n.toString().split('').reverse().join(''));
//   };
// }

// function reverseInt(n) {
//   const newN = n.toString().split('').reverse().join('');
//   return parseInt(newN) * Math.sign(n);
// }