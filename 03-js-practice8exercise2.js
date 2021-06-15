/* 
Source: https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5

Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

*/

// By Damian Demasi - Jun 2021

// First
function reverseArray(array) {
    let newArray = [];
    for (let item of array) {
        newArray.unshift(item);
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C", "D"]));

// Second
function reverseArrayInPlace(array) {
    let itemAux;
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        itemAux = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = itemAux;
    }
    return array;
}

let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);