/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

// Your code here.

// Toate 3 functioneaza

const reverseArray = arr => {
  let reversed = [];
  arr.forEach(element => {
    reversed.unshift(element);
  });
  return reversed;
};

const reverseArray2 = arr => {
  let reversed = [];
  for (let i = 1; i <= arr.length; i++) {
    reversed[i - 1] = arr[arr.length - i];
  }
  return reversed;
};

const reverseArray3 = arr => {
  let aux;
  for (let i = 0; i < arr.length / 2; i++) {
    aux = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = aux;
  }
  return arr;
};

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
