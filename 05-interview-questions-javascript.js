// *** QUESTION: How you add something to the beginning and end of an array?

const myArray1 = ['a', 'b', 'c'];

// Pre ES6
myArray1.unshift('start');
myArray1.push('end');

console.log(myArray1);

// Post ES6
let myArray2 = ['a', 'b', 'c'];

myArray2 = ['start', ...myArray2, 'end']; // It's a bad practice to mutate an array
console.log(myArray2);

// *** QUESTION: How do you create a private variable in JavaScript?

function secretVariable() {
    var private = 'super secret code';
    return function () {
        return private;
    };
}

console.log(secretVariable());
// -> [Function(anonymous)];
console.log(secretVariable()());
// -> super secret code

// *** QUESTION: What is the output?

var num = 6;
function outer() {
    var num = 4;
    function inner() {
        num++;
        var num = 3;
        console.log(num);
    }
    inner();
}
outer();
// -> 3
console.log(num);
// -> 6
// Inner scope has precedence over outer scope. Output is 3 and 6.

// *** QUESTION: What is the output?

console.log(typeof typeof 1);
// -> string

// *** QUESTION: What is the output?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;
var stoleSecretIdentity2 = hero.getSecretIdentity.bind(hero);
var stoleSecretIdentity3 = hero.getSecretIdentity();

console.log(stoleSecretIdentity());
// -> undefined
console.log(stoleSecretIdentity2());
// -> 'John Doe'
console.log(stoleSecretIdentity3);
// -> 'John Doe'
console.log(hero.getSecretIdentity());
// -> 'John Doe'

// *** QUESTION: What is the difference btw let and var?

console.log(myVar); // -> udefined
var myVar = 1;
console.log(myVar); // -> 1

// console.log(myLet); // -> ReferenceError
let myLet = 2;
console.log(myLet);

// *** QUESTION: What is prototype in javascript?

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            'first': first,
            'last': last
        };
        this.age = age;
        this.gender = gender;
    }
}

let person1 = new Person('John', 'Doe', 40, 'male', ['music', 'hiking']);

// Type 'person1.' on the console and you will see the constructor properties, as well as the Object properties (thanks to prototypal inheritance of Object.prototype);

// *** QUESTION: What is a closure?

// First example:
const myName = 'Damian';

function printName() {
    console.log(myName);
}

printName();
// -> Damian

// Second example:
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVariable);
    };
};

const newFunction = outerFunction('outside'); // After the parent function is called, it no longer exists
outerFunction('inside'); // But the child function know about the 'outerVariable' defined in its parent thanks to closures
