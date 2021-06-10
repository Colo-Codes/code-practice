/*
Source: https://eloquentjavascript.net/03_functions.html#h_TcUD2vzyMe

Write a function min that takes two arguments and returns their minimum.
*/

// By Damian Demasi, Jun 2021

function min(a, b) {
    if (a === b) {
        return null;
    }
    else {
        if (a < b) {
            return a;
        }
        else {
            return b;
        }
    }
}

function min2(a, b) {
    if (a === b) {
        return null;
    }
    else {
        return a < b ? a : b;
    }
}

function min3(a, b) {
    return a === b ? null : a < b ? a : b;
}

let min4 = function (a, b) {
    return a === b ? null : a < b ? a : b;
};

let min5 = (a, b) => a === b ? null : a < b ? a : b;

console.log("1)",min(-2, 7));
console.log("2)",min2(-2, 7));
console.log("3)",min3(-2, 7));
console.log("4)",min4(-2, 7));
console.log("5)",min5(-2, 7));