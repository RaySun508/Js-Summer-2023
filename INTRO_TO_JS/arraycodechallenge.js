


/*Array Code Challenge
Create an array of student names (Add at least 5 names)
Find the length of an array
Demonstrate the usage of array manipulation on students array by showing example of pop, push, shift, unshift, splice functions
Find out if array includes the value ‘John’
Find index of student ‘Kate’
Reverse your array and print last Index value
Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP )*/

//created an array of 5 student names 
let namesOfStudent = ['Hector', 'Charlie', 'Brent', 'Lili', 'Aris'];

    console.log(`Created names Of Student : ${namesOfStudent}`);

    //Find the length of an array

let lengthOfArray = namesOfStudent.length 



 
console.log(`length Of Array : ${lengthOfArray}`);

//Unshift Function 


let studentUnshift = namesOfStudent.unshift('Aris');
console.log(`used unshift : ${studentUnshift}`);

//demonstrate shift


let studentShift = namesOfStudent.shift();
console.log(`used shift : ${studentShift}`);


//Demonstrate the usage of array manipulation on students array by showing 
//example of pop, push, shift, unshift and splice 

let dogs = ['Angel', 'Stormy', 'Thunder', 'Scout', 'Buck'];
console.log(`Print the dogs name : ${dogs}`);

//push

let pushDogsArray = dogs.push('Tink');
console.log(`Push name of Tink : ${dogs}`);

//use pop
let popDogsArray = dogs.pop('Tink');
console.log(`use pop to remove Tink : ${dogs}`);

//splice method 1 

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'neptune', 'pluto'];
planets.splice(0, 1, 'Saturn');
console.log(planets);

//Splice Method 2 
let splicePlanetsArray = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'neptune', 'pluto'];
splicePlanetsArray.splice(1, 1, 'Saturn');
console.log(`remove index 1 : ${splicePlanetsArray}`);









