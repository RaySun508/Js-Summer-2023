  
//Practive 
//convert the given 4-word sentence into TitleCase


let givenWords = 'My Alligator IS BAD';
let convertLowercase = givenWords.toLowerCase();

let index_0 = convertLowercase.charAt(0).toUpperCase();
let index_3 = convertLowercase.charAt(3).toUpperCase();
let index_13 = convertLowercase.charAt(13).toUpperCase();
let index_16 = convertLowercase.charAt(16).toUpperCase();

let space = ' ';


let result = index_0 + convertLowercase.substring(1, 2) + space + index_3
+ convertLowercase.substring(4, 12) + space + index_13 + convertLowercase.substring(14, 15) + space + 
index_16 + convertLowercase.substring(17, 19);

console.log(`${result}`);

