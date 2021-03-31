/**
 * MINIMUM
 *
 * to run code from this file use: npx nodemon 4-min
 *
 * 4.1 Write a function that will bring two Number arguments and will return the minimum of these two arguments
 *
 * 4.2 Optional: Modify the min function created before to bring an array of numbers as a
 *    single argument and return the smallest number from this array.
 *    (e.g: console.log(minArr([2, 4, -4, 10, 0, -9, 17]));  → -9
 *
 * Do not use Math.min
 */

// Your code here.
//
// Use these commands to test your code:
//
//console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10
//

const min = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a < b ? a : b
  }
}

const minArr = (minArr) => {
  if (Array.isArray(minArr)) {
    let minElement = minArr[0]
    minArr.forEach((el) => {
      minElement = el < minElement ? el : minElement
    })
    return minElement
  }
}
console.log(min(0, 10))
console.log(min(0, -10))

let arr = [0, 2, 4, -1, 10]
console.log(minArr(arr))
