//Or Operator 
//And Operator
//logical AND (&&)
//logical NOT (!)
//if(amountInWallet >= productPrice && isProductAvailable === true) {
//    console.log('You can purchase the product');
//}

let productPrice = 10;
let amontInWallet = 30;
let isProductAvailable = true;
let useCreditAvailable = true;
//logical OR (||)
if(amontInWallet >= productPrice || useCreditAvailable === true) {
    console.log('You are eligable to purchase this product');

let isUserLoggedIn = false;
//using logical not operator to invert the value
let isuserLoggedOut = !isUserLoggedIn;

console.log(isuserLoggedOut);

//using the ternary operator

let age = 11;
let isAdult = age >= 18 ? 'true' : 'false'; 

console.log(isAdult)

