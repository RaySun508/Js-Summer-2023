//let numOne = 10;
//let numTwo = 20; 

//let total = numOne + numTwo;

//console.log(total)

function addNumbers(numOne, numTwo) {
    let total = numOne + numTwo;
    console.log(total);
   
}
addNumbers(2, 5);

function printName(name) {
    console.log(`isername is ${name}`)
};

printName('John');
printName('Mike');

//To convert Farenheit to Celsius, you can use the following formuler 
//Clesius = (Farenheit - 32) * 5/9

function convertFarebheitToCelsius(Farenheit) {
    let celsius = (farenheit - 32 ) * 5/9;
    console.log(`${farenheit}F is equal to ${celsius}C`);
}
convertFarebheitToCelsius(80);
