/*
Source: https://eloquentjavascript.net/03_functions.html#h_TcUD2vzyMe

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// By Damian Demasi, Jun 2021

// 1st way
// function isEven(n) {
//     n < 0 ? n=-n : n;
//     return n === 0 ? true : n === 1 ? false : isEven(n-2);
// }

// 2nd way
// function isEven(n) {
//     return n === 0 ? true : n === 1 ? false : n < 0 ? isEven(n+2) : isEven(n-2);
// }

// 3rd way
let isEven = n => n === 0 ? true : n === 1 ? false : n < 0 ? isEven(n+2) : isEven(n-2);

console.log("1)",isEven(50));
console.log("2)",isEven(75));
console.log("3)",isEven(1));
console.log("4)",isEven(0));
console.log("5)",isEven(-1));
console.log("6)",isEven(-50));
console.log("7)",isEven(-75));