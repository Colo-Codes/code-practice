/* 
Source: https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

*/

// By Damian Demasi - Jun 2021

// First
function arrayToList(array) {
    let list = null;
    for (const item of array.reverse()) {
        list = {value: item, next: list};
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));

// Second
function listToArray(list) {
    let array = [];
    array.push(list.value);
    while (list.next !== null) {
        list = list.next;
        array.push(list.value);
    }
    return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

// Third
function prepend(element, list) {
    return newList = {value: element, next: list};
}

console.log(prepend(101, arrayToList([1, 2, 3])));

// Fourth
function nth(list, number) {
    return listToArray(list)[number];
}

console.log("nth: [1,2,3] -> ",nth(arrayToList([1, 2, 3]), -1));
console.log("nth: [1,2,3] -> ",nth(arrayToList([1, 2, 3]), 0));
console.log("nth: [1,2,3] -> ",nth(arrayToList([1, 2, 3]), 1));
console.log("nth: [1,2,3] -> ",nth(arrayToList([1, 2, 3]), 2));
console.log("nth: [1,2,3] -> ",nth(arrayToList([1, 2, 3]), 3));
console.log("nth: [1,2,3] -> ",nth(arrayToList([1, 2, 3]), 4));

// Fifth
function nthRecursive(list, number) {
    if (number === 0) {
        return list.value;
    }
    else if (list.next === null || number < 0) {
        return undefined;
    }
    else {
        return nthRecursive(list.next, number - 1);
    }
}

console.log("nthRecursive: [1,2,3] -> ",nthRecursive(arrayToList([1, 2, 3]), -1));
console.log("nthRecursive: [1,2,3] -> ",nthRecursive(arrayToList([1, 2, 3]), 0));
console.log("nthRecursive: [1,2,3] -> ",nthRecursive(arrayToList([1, 2, 3]), 1));
console.log("nthRecursive: [1,2,3] -> ",nthRecursive(arrayToList([1, 2, 3]), 2));
console.log("nthRecursive: [1,2,3] -> ",nthRecursive(arrayToList([1, 2, 3]), 3));
console.log("nthRecursive: [1,2,3] -> ",nthRecursive(arrayToList([1, 2, 3]), 4));
