require("./temp.js");
const { x, sum, sub } = require("./sum.js");
//const mod = require("./sum.js");
console.log("your at at app.js file.");

sum(5, 10);
sub(10, 5);
console.log(x);

console.log(module.exports); //{} so it is empty module

// const { multiply } = require("./calculate/multiply.js");
// multiply(5, 10);
// const { multiply } = require("./calculate/index");
//u also dont have to write /index

const { multiply } = require("./calculate");
multiply(1, 0);

//ES Module

// import { sum, sub } from "./sum.js";
// sum(10, 5);
// sub(5, 10);
