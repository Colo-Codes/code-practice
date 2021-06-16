/* 
Source: https://eloquentjavascript.net/04_data.html#i_IJBU+a

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

*/

// By Damian Demasi - Jun 2021

// First
function deepEqual(value1, value2) {
    // console.log("=== Main function call");
    if (typeof(value1) === 'object' && value1 !== null && typeof(value2) === 'object' && value2 !== null) {
        // console.log("--- (1) Comparing objects...");
        // Check properties names
        let keys1 = Object.keys(value1);
        let keys2 = Object.keys(value2);
        if (keys1.length !== keys2.length) {
            // console.log("false");
            return false;
        }
        else {
            for (let i = 0; i < keys1.length; i++) {
                // console.log("Iterating with:",keys1[i], " = ", keys2[i]);
                if (keys1[i] !== keys2[i]) {
                    // console.log("keys: deep false:", keys1[i], " = ", keys2[i]);
                    return false;
                }
                else {
                    if (typeof(value1[keys1[i]]) === 'object' && typeof(value2[keys2[i]]) === 'object') {
                        if(deepEqual(value1[keys1[i]],value2[keys2[i]]) === false) {
                            // console.log("values: deep false:", value1[keys1[i]], " = ", value2[keys2[i]]);
                            return false;
                        }
                    }
                    else if (value1[keys1[i]] !== value2[keys2[i]]) {
                        // console.log("values: deep false:", value1[keys1[i]], " = ", value2[keys2[i]]);
                        return false;
                    }
                    else {
                        // console.log("values: deep true:", value1[keys1[i]], " = ", value2[keys2[i]]);
                        return true;
                    }
                }
            }
        }
    }
    else {
        // console.log("--- (2) Comparing values...");
        if (value1 === value2) {
            // console.log("true:", value1, value2);
            return true;
        }
        else {
            // console.log("false:", value1, value2);
            return false;
        }
    }
}

let a = [1, 2, 3];
let b = "string";
console.log(deepEqual(a,b));
// → false
console.log(deepEqual("string",b));
// → true
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: {is: "an"}, object: 0}));
// → false
console.log(deepEqual(obj, {here: {is: "another"}, object: 2}));
// → false
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 0}));
// → false
console.log(deepEqual(obj, {here: {is: "another"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {isnt: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false
console.log(deepEqual(null, obj));
// → false
console.log(deepEqual(obj, null));
// → false
console.log(deepEqual(null, null));
// → true