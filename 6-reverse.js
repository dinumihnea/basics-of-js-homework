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

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

const reverseArray = function (arr) {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) revArr.push(arr[i]);
  return revArr;
};

console.log(reverseArray(['A', 'B', 'C']));
