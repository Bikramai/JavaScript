// Write a function that takes two numbers and returns the maximum of the two.

// Logic 
// Define a function, call it maximum, here we need two parameters a, and b.
// If statement, if a is greater than b, we want to return a, else we want to return b.
// so, let's declare a variable called number and set it to max of 1, and 2.
// let's display number on the console.

// Solution:

// let number = maximum(3, 3);
// console.log(number);

// function maximum(a, b) {
//     if (a, b) return a;
//     else return b;
// }

// 1st option for Optimization

// let number = maximum(3, 3);
// console.log(number);

// function maximum(a, b) {
//     if (a, b) return a;
//     return b;
// }

// 2st option for Optimization
let number = maximum(5, 10);
console.log(number);

function maximum(a, b) {
    //(condition) ? a : b
    return (a > b) ? a : b;
}