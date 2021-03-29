/**
 * LOOPING A TRIANGLE
 *
 * to run code from this file use: npx nodemon 1-triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 *
 * Try to find the most optimal way to do this.
 *
 */

// Your code here.

// not sure if I'm allowed to use substring()

console.log('\nmethod 1:');

for (let i = 1; i <= 7; i++) {
  console.log('#######'.substring(0, i));
}

console.log('\nmethod 2:');

// with no predefined methods

let string = '#';
for (let i = 0; i < 7; i++) {
  console.log(string);
  string += '#';
}
