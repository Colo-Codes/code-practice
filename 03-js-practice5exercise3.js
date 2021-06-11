/*
Source: https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do

You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

// By Damian Demasi, Jun 2021

// 1st way:
// function countBs(string) {
//     let num = 0;
//     for (let i = 0; i < string.length; i++) {
//         string[i] === "B" ? num++ : undefined;
//     }
//     return num;
// }

// 2nd way:
// function countBs(string) {
//     let num = 0;
//     let index = string.length;

//     function checkIndex(index) {
//         string[index--] === "B" ? num++ : undefined;
//         return index === -1 ? num : checkIndex(index);
//     }
    
//     return checkIndex(index);
// }

// 3rd way:
function countBs(string) {
    let num = 0;
    let index = string.length;

    function checkIndex(index) {
        string[index--] === "B" ? num++ : undefined;
        return index === -1 ? num : checkIndex(index);
    }
    
    return checkIndex(index);
}

function countChar(string, char) {
    let num = 0;
    let index = string.length;

    function checkIndex(index) {
        string[index--] === char ? num++ : undefined;
        return index === -1 ? num : checkIndex(index);
    }
    
    return checkIndex(index);
}

console.log(countBs("BiBlioteca"));
console.log(countBs("Barbarian"));
console.log(countChar("BiBlioteca", "i"));
console.log(countChar("Barbarian", "a"));