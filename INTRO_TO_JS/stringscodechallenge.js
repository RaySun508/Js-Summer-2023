/**Declare a new string variable with name coder and set value to 'I am a good programmer'
Find out the type of the variable coder
Find out the length of the variable coder
Convert to all uppercase
Convert to all lowercase
Find out if it includes the word ‘good’
Strip out the word  ‘programmer’ from variable
Find out if variables ends with the word `programmer`
Split the variable into two variable at `good` word 
Review all possible action we can do on a string from this doc
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String */


//Declare a new string variable with name coder and set value to 'I am a good programmer'

let coder = ('I am a good programmer');

//Find out the type of the variable coder

let coder1 = ('I am a good programmer');
console.log(typeof coder1);

//Find out the length of the variable coder

let coder2 = ('I am a good programmer');
console.log(coder2.length);

//Convert to all uppercase

let coder3 = ('I am a good programmer');
let newCoder3 = coder3.toUpperCase();
console.log(newCoder3);


//Convert to all lowercase

let coder4 = ('I am a good programmer');
let newCoder4 = coder3.toLowerCase();
console.log(newCoder4);

//Find out if it includes the word ‘good’

let coder5 = ('I am a good programmer');
let newCoder5 = coder5.includes('good');
console.log(newCoder5);

//Strip out the word  ‘programmer’ from variable using replace method 

let coder6 = ('I am a good programmer');
let newCoder6 = coder6.replace('programmer', ' ');
console.log(newCoder6);

//Find out if variables ends with the word `programmer` I am using ends with method

let coder7 = ('I am a good programmer');
let newCoder7 = coder7.endsWith('programmer');
console.log(newCoder7);


//Split the variable into two variable at `good` word 

let coder8 = ('I am a good programmer');
let newCoder8 = coder8.split('good');
console.log(newCoder8);


