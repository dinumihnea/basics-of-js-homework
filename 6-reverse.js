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
function reverseArray(arr){
    let newArr = []
    for (let i=1; i<=arr.length; i++){
        newArr.push(arr[arr.length-i])
    }
    return newArr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
