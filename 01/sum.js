console.log("you are at sum.js file.");

let x = 90;

function sum(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

module.exports = { x, sum, sub };
// module.exports.x = x;
// module.exports.sum = sum;
// module.exports.sub = sub;

//ES Module
// let x = 90;

// export function sum(a, b) {
//   console.log(a + b);
// }

// export function sub(a, b) {
//   console.log(a - b);
// }
