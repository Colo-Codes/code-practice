/* 
Source: https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/

The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/

// By Damian Demasi - Jun 2021

// First & third
function range(start, end, step = 1) {
    let array = [];
    // for (let i = 0; i <= Math.max(start, end) - Math.min(start, end); i += Math.abs(step)) {                  
    //     (step < 0) ? array.push(start-i) : array.push(start+i);
    // }
    for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
        array.push(i);
    }
    return array;
}

console.log("range(2, 5) -> ",range(2, 5));

// Second
function sum(array) {
    let sumTotal = 0;
    for (const item of array) {
        sumTotal += item;
    }
    return sumTotal;
}

console.log("sum(range(1, 10))", sum(range(1, 10)));

// Third
console.log("range(5, 2, -1) -> ", range(5, 2, -1));
console.log("range(5, 2, -2) -> ", range(5, 2, -2));
console.log("range(10, 1, -3) -> ", range(10, 1, -3));
console.log("range(1, 10, 3) -> ", range(1, 10, 3));