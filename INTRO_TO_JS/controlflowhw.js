/**
Enable fullscreen
Control Flow Code Challenge:


Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.
let number = 10;


Write a program based on age and displays a message based on their age using an if-else if statement:
let age = 24;
If the age is less than 18, display "You are a minor".
If the age is between 18 and 65 (inclusive), display "You are an adult".
If the age is greater than 65, display "You are a senior citizen".


Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement.
let letter = 'e';


Write a program based on three numbers and displays the largest number using an if-else statement.
let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;


Write a program based on given password and displays a message based on the password using an if-else statement:
let password = 'Test1233';

If the password is less than 8 characters, display "Password too short".
If the password contains both letters and numbers, display "Password accepted".
If the password does not meet either of the above conditions, display "Password rejected".
 */


//1. Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.
//let number = 10;

let number = 10;

if (number %2 === 0) {
    console.log(`number is even ${number}`);
}
else{
    console.log(`number is odd ${number}`);

}

//2. Write a program based on age and displays a message based on their age using an if-else if statement:
//let age = 24;
//If the age is less than 18, display "You are a minor".
//If the age is between 18 and 65 (inclusive), display "You are an adult".
//If the age is greater than 65, display "You are a senior citizen"

let age = 17;
if (age <= 18){
    console.log(`"You are a minor" ${age}`);
}
else if(age >= 18 && age <= 65) {
    console.log(`"You are an adult" ${age}`);

}
else if(age >= 66){
    console.log(`"You are a senior citizen" ${age}`);

}

//3. Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement.
//let letter = 'e';

let letter = 'o' 
if (letter === 'a'){
    console.log(`it is a vowel ${letter}`);
}
else if (letter === 'e'){
    console.log(`it is a vowel ${letter}`);
}
else if (letter === 'i'){
    console.log(`it is a vowel ${letter}`);
}
else if (letter === 'o'){
    console.log(`it is a vowel ${letter}`);
}
else if (letter === 'u'){
    console.log(`it is a vowel ${letter}`);
}
else {
    console.log(`it is a consonant ${letter}`);

}


//4. Write a program based on three numbers and displays the largest number using an if-else statement.
//let numberOne = 30;
//let numberTwo = 15;
//let numberThree = 45;

let numOne = 99
let numTwo = 33
let numThree = 22

if (numOne >= numTwo && numTwo >= numThree){
    console.log(`numOne is the largest ${numOne}`);
    
}
else if (numTwo >= numOne && numTwo >= numThree){
    console.log(`numTwo is the largest ${numTwo}`);
}
else if (numThree >= numOne && numThree >= numTwo){
    console.log(`numThree is the largest ${numThree}`);
}

//Write a program based on given password and displays a message based on the password using an if-else statement:
//let password = 'Test1233';

//If the password is less than 8 characters, display "Password too short".
//If the password contains both letters and numbers, display "Password accepted".
//If the password does not meet either of the above conditions, display "Password rejected".

//Declare a variable

let password = 'Test1233';

let lengthPassword = password.length

if(lengthPassword<8)
{
    console.log('You password is too short');
}
else if (password.length === 'T' || 'e' || 's' || 't' && password === '1' || '2' || '3' || '3')
{
console.log(`Your Password accepted`);
}
else
{
    console.log(`Your Password was Rejected`);
}

//logic 2 

/**let password = 'Test1234'

let lenghtPassword = password.length;
{
if(lenghtPassword<8)
   
    console.log(`Your Password is accepted`);
}

else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && pasword === '&' && '%' && '$')

{   
    console.log(`Your password is accepted`);
}
else if ()*/

