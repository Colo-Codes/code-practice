/*
Source: https://eloquentjavascript.net/02_program_structure.html#i_umoXp9u0e7

Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.
*/

let octothorp = "";

for (let index = 0; index < 7; index++) {
    console.log(octothorp += "#");
}

// By Damian Demasi, Jun-2021