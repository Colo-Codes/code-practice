/*
Source: https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ

Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

let size = 8;

/* 1st way:
let line = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
            line += " ";
        }
        else {
            line += "#";
        }
    }
    console.log(line);
    line = "";
}    
*/

for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
        (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) ? line += " " : line += "#";
    }
    console.log(line);
}
    
// By Damian Demasi, Jun-2021