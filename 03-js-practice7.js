/* Objects and other data types and structures */

// Defining an 'array' object
let myArrayObject = [10, 20, 30, 40, 50, 60];

// Accessing the 'array' object
console.log(myArrayObject[1]);
// console.log(myArrayObject.1); // This is not legal because identifiers are not allowed to start with numbers, and the y in x.y is an identifier.

// Testing methods
let string = "This is my string";

console.log(string.toLocaleUpperCase); // This returns the method (function value)
console.log(string.toLocaleUpperCase()); // This returns the result of the method

// What properties does an object has?
let myObject = {
    age: 40,
    name: "Damian",
    hobbies: "Programming"
};
console.log(Object.keys(myObject));
console.log(Object.keys(myArrayObject));

// Arrays
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
  }
  console.log(remove(["a", "b", "c", "d", "e"], 2));
  // → ["a", "b", "d", "e"]