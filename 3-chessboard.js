/**
 * CHESSBOARD
 *
 * to run code from this file use: npx nodemon 3-chessboard
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 *
 * When you have a program that generates this pattern, define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of the given width and height.
 *
 */

// Your code here.

var size = 8;
var block = '#';
var space = ' ';

for (var i = 1; i <= size; i++) {
  var line = '';

  for (var y = 1; y <= size; y++){
    if (i % 2) {
        if (y % 2) {
            line = line + space;
        } else {
            line = line + block;
        }
    } else {
        if (y % 2) {
            line = line + block;
        } else {
            line = line + space;
        }
    }
  }

  console.log(line);
}