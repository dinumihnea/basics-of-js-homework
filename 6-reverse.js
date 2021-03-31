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
function reverseArray(arr){
    let result=[];
    let count = arr.length;
    for(let i=0; i<count;i++){
        result.push(arr.pop())
    }
    console.log(result);
}

reverseArray(['Iulik', 'Vitea','Vova']);
