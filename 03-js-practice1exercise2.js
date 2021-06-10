/*
Source: https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

*/

for (let num = 1; num <= 100; num++) {
    /* 1st way:
    if (num % 3 === 0 && num % 5 !== 0) {
        console.log("Fizz");
    }
    else if (num % 3 !== 0 && num % 5 === 0) {
        console.log("Buzz");
    }
    else if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(num);
    }
    */

    /* 2nd way:
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log("Fizz");
        }
    }
    else {
        if (num % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(num);
        }
    }
    */

    /* 3rd way: */
    let fizz = num % 3 === 0, buzz = num % 5 === 0;
    console.log(fizz ? (buzz ? "FizzBuzz" : "Fizz") : (buzz ? "Buzz" : num));

    /* 4th way (https://gist.github.com/jaysonrowe/1592432)
    for(var i=1;i<=100;i++, msg=""){
        if (!(i%3)) msg+="Fizz"; 
        if (!(i%5)) msg+="Buzz"; 
        console.log(msg || i); 
    }
    */
}

// By Damian Demasi, Jun-2021