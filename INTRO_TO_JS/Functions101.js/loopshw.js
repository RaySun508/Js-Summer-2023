/**
 * Loops Code Challenge:
You have been hired by a company that sells products online. They want you to create a javascript program that will help them manage their inventory. The program should be able to loop through an array of products and perform certain tasks based on the product information.



Instructions:



Create an array of products with at least 5 products. Each product should have the following properties:

Name

Price

Quantity
 */

let products = [
    {
      name: 'Henna',
      price: 10.00,
      quantity: 5,
    },
    {
      name: 'Drum',
      price: 15.49,
      quantity: 4,
    },
    {
      name: 'Ballon',
      price: 7.50,
      quantity: 7,
    },
    {
      name: 'Shampoo',
      price: 13.99,
      quantity: 2,
    },
    {
      name: 'Car',
      price: 23000.00,
      quantity: 10,
    }
]
  console.log(products);
  //2. Loop through the array using a for loop and print out the name and price of each product.



 for (let i = 0; i <= products.length-1; i++) {
    //let pprice = products.price[i];
    //let nname = products.name[i];
    console.log(`${products[i].name} : ${products[i].price}`); 
  
 //let products = [i];
}
  
//3. Use a while loop to find the product with the lowest price. Print out the name and price of the product.

let lowestPrice = products[0];
let i = 1;

while (i < products.length) {
  let currentProduct = products[i];
  if (currentProduct.price < lowestPrice.price) {
    lowestPrice = currentProduct;
  }
  i++;
}

console.log(`Product with the lowest price: ${lowestPrice.name}, Price: $${lowestPrice.price}`);

//4. Use a for of loop to calculate the total value of all products in the array.



let totalValue = 0;

let prices = {
  'henna': 10.00,
  'drum': 15.49,
  'car': 23000.00,
  'ballon': 7.50,
  'shampoo': 13.99,
};

for (totalValue of products) {
  let price = prices[products];
  totalValue += price;
  
}

console.log(`Total value of products: ${totalValue}`);


//I keep printing Object what am I doing wrong 

/**5. Use a for in loop to print out all the properties of each product in the array.

Example Output:

Name: Product A
Price: $10
Quantity: 4

Name: Product B
Price: $20
Quantity: 3

Name: Product C
Price: $15
Quantity: 7

Name: Product D
Price: $25
Quantity: 2

Name: Product E
Price: $30
Quantity: 4 */


 let pproducts = ['Henna, Drum, Ballon, Shampoo, Car'];

for (let a = 0; a < pproducts.length; a++) {
  let product = pproducts[a];
  console.log(`Properties of ${product}:`);
  
  for (let prop in product) {
    console.log(`${prop}`);
  }

}

//6. FizzBuzzCreate a program that prints the numbers from 1 to 100, 
//but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".



for (let io = 1; io <= 100; io++) {
    if (io % 3 === 0 && io % 5 === 0) {
      console.log('FizzBuzz');
    } else if (io % 3 === 0) {
      console.log('Fizz');
    } else if (io % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(io);
    }
  }
  