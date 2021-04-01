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

function makeString(length,type){
    let result='';
    if(type===1){
        for(let i=1;i<=length;i++){
            if(i%2!==0){
                result+='#';
            }else{
                result+=' '
            }
        }
    }else{
        for(let i=1;i<=length;i++){
            if(i%2!==0){
                result+=' ';
            }else{
                result+='#'
            }
        }
    }
    console.log(result);
}

function chessBoard(size){
    for(let i=1;i<=size;i++){
        if(i%2!==0){
            makeString(size,1)
        }else{
            makeString(size,2)
        }
    }
}

chessBoard(7);
