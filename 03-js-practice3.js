/* Closures */

function parentFunc(parentName) {
    return function childFunc() {
        console.log("Hi", parentName); // This function is a closure
    };
}

parentFunc("Damian"); // This returns the definition of the childFunc function, but not the actual result of that function. This is why it doesn't work.

let myFunc = parentFunc("Damian");  // This is like writing a function expression. It translates to:
                                    // let myFunc = function childFunc() {
                                    //     console.log("Hi", "Damian");    // The value of the variable "parentName" is available in the inner function thanks to closure (a function has access to the scope of its parent)
                                    // };
                                    // So now we can call childFunc with: myFunc();
myFunc();