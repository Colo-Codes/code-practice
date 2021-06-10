/* Function expression vs function declaration (and hoisting) */

// -------- Block 1 - works OK

// Function expression
let square = function(x) {
    console.log(x * x);
}

// Function execution
square(5);

/*
// -------- Block 2 - Does not work, because function expressions are not hoisted

// Function execution
square2(10);

// Function expression
let square2 = function(x) {
    console.log(x * x);
}
*/

// -------- Block 3 - works OK

// Function declaration
function square3(x) {
    console.log(x * x);
}

// Function execution
square3(15);

// -------- Block 4 - Also works OK, because function declarations are hoisted (on scope)

// Function execution
square4(20);

// Function declaration
function square4(x) {
    console.log(x * x);
}

/*
// -------- Block 5 - will not work, because the function declaration is hoisted but the variable initialisation is not (but its definition is).

// Function execution
square5();

let number = 25;

// Function declaration
function square5() {
    console.log(number * number);
}
*/