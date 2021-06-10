"use strict";

// declare names

let name1 = "Rand"; // length of 4
let name2 = "Nynaeve"; // length of 7
let name3 = "Lanfear"; // length of 7
let name4 = "Moraine"; // length of 7
let name5 = "Lan"; // length of 3
let name6 = "Egwene"; // length of  6
let name7 = "Mat"; // length of 3
let name8 = "Aviendha"; //length of 8
let name9 = "Min"; // length of 3
let name10 = "Ishamael"; // length of 8

// grouping all the names together so we can loop through them.
let listOfNames = [name1, name2, name3, name4, name5, name6, name7, name8, name9, name10];

// make a variable to hold the longest length number to compare against.
let longestLengthNumber = 0;

// let's loop through the names once to figure out what the longest length number is
for (let name of listOfNames) {
    if (name.length > longestLengthNumber) {
        longestLengthNumber = name.length;
    }
}

// now let's loop through all the names and say the ones that are as long as the longestLengthNumber
console.log("The longest name/s are...");
for (let name of listOfNames){
    if (name.length == longestLengthNumber){
        console.log(name);
    }
}