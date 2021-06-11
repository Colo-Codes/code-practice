/* 
    Scopes of variables with 'var' and 'let' statements and without statement
    in three different scopes:
        - Global
        - Function
        - Block (if...else, for, while, etc.)
    
    Which variables are global? Let's see.
 */

// --- Global scope ---
var myVar1 = 10; // Using the 'var' statement
let myVar2 = 20; // Using the 'let' statement
myVar3 = 30;     // Using no statement

if (true) {
    myVar1 += 5;
    myVar2 += 5;
    myVar3 += 5;
}

console.log("Global scope - Global value after block:", myVar1); // -> Global scope after block: 15
console.log("Global scope - Global value after block:", myVar2); // -> Global scope after block: 25
console.log("Global scope - Global value after block:", myVar3); // -> Global scope after block: 35

function myFunc() {
    myVar1 += 3;
    myVar2 += 3;
    myVar3 += 3;
}
myFunc();

console.log("Global scope - Global value after function:", myVar1); // -> Global scope after function: 18
console.log("Global scope - Global value after function:", myVar2); // -> Global scope after function: 28
console.log("Global scope - Global value after function:", myVar3); // -> Global scope after function: 38

// --- Function scope ---

function myFunc() {
    var myVar4 = 40; // Using the 'var' statement. This variable is only defined inside the function and it will not be accessible on the global scope.
    let myVar5 = 50; // Using the 'let' statement. This variable is only defined inside the function and it will not be accessible on the global scope.
    myVar6 = 60;     // Using no statement. This is a global variable.
}
myFunc();

// console.log("Function scope - Global value after function:", myVar4); // -> ReferenceError: myVar4 is not defined
// console.log("Function scope - Global value after function:", myVar5); // -> ReferenceError: myVar5 is not defined
console.log("Function scope - Global value after function:", myVar6); // -> Function scope - Global value after function: 60

// --- Block scope ---

if (true) {
    var myVar7 = 70;
    let myVar8 = 80;
    myVar9 = 90;
}

console.log("Block scope - Global value after block:", myVar7); // -> Block scope - Global value after block: 70
// console.log("Block scope - Global value after block:", myVar8); // -> ReferenceError: myVar8 is not defined
console.log("Block scope - Global value after block:", myVar9); // -> Block scope - Global value after block: 90