/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 * 
 * Do not use Array.reverse
 */

// Your code here.

function reverseArray(arr) {
    return arr.map((el, index) => arr[arr.length-1-index])
}

console.log(reverseArray(['A', 'B', 'C', 'D']))

// alternative variant

function forCycleReverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

console.log(forCycleReverseArray(['A', 'B', 'C', 'D']))