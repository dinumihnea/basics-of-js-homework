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

const iterationsCount = 7
let line = ''
for (let i = 0; i < iterationsCount; i++) {
  line += '#'
  console.log(line)
}
