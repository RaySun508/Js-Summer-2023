//Strings
//data is always enclosed in single quotes and double quotes
//for storing and manipulating text. 
//made of zero or more characters


//Declare a string type variable with name sentence
let sentence = 'yes another string primitive';

//find length

//console.log(sentence.length)

//Find out letter stored in index 0 

let letters = 'words';

//it is the first in a numeric value and begins on 0 always and always has
//1 less at the final index 

console.log(letters.charAt(0));

//Find out in sentence includes the word primitive 
console.log(sentence.includes('primitive'));

//convert sentence to all uppercase 

console.log(sentence.toUpperCase());
//convert sentence to all lowercase 

console.log(sentence.toLowerCase());

//string.prototype docs on mozilla 

//do homework for code challenge

//To find if the given string starts with a given pattern
//function: startWith()
//input: pattern(string)
//returns a Boolean
//if the string starts with the given pattern function returns true

//startsWith
//endsWith
//for the string pattern 
let endsWith
let statement = ''
let pattern = 'go';

//to find if a string contains a certain pattern
//function: includes
//input: pattern
//retrun: a boolean


//to join or concatenate two or more strings

//function: concat| funtion will join the given combined strings and give the result


//to remove extRA spaces before the first character in the string and after the last value 

//function: trim
let myString = '  king  queen    go for    a  walk '
console.log('myString --> +${myString_afterTrim}+');


//to find the character present at any given index

//function: charAt
input: indexNum
//returns a string

let charAt2 = sentence.charAt(2);
//console.log(char at index-2);

//a negative number is not valid empty string / a correct 

//find the last character of the string 

let inputStr = 'toats is good'

//indexOf function first occorence
firstIndexOf
//indexNum focuses on the last occerance
lastIndexOf

//toReplace


//*String
//String-Concept-1.3s
//length (property)
//toUpperCase()
//toLowerCase()
// String-Concept-2.js
//startsWith()
//endsWith()
//includes ()
//concat()
//trin()
//charat()
//index0f ()
//LastIndexof()
//replace()
//localeCompare()
//String-Concept-3.js
//substring(), slice(), substri)
//•split())
//let sentence
//'BreAkInG news, laTesT news':
// 7145pm

/**To estract a portion from a String
 * function: substring() / slice() / substr()
 * 
 * 'BreaKIng news, laTest neWs'
 * 
 * to extract a part of a given string using index values 
 * use 
 * funtion: substring()
 * input: startIndex, endIndex
 * return: function returns the portion of String strating 
 * from the startIndex up to the endIndex
 * imput: startIndex
 * 
 * input: both indexes where to start and where to stop
 * 
 * substring copies the original value and extracts the portion from the 
 * copied value depending upon the given index 
 * and does not change the original string value 
 * 
 * let sentence = 
 */


let sentence = 'BreaKIng news, laTest neWs';

let subString_2_5 = sentem=nce.subString(2, 5);


let subString_1_10 = sentence.substring(1, 10);

let subString_4 = sentence.substring(4)

//if ending index is invalid you will get 