/**Array Function Code Challenge:
1. Write a function that takes an array of objects 
representing books and returns an array containing the titles of those books.

2. Write a function that takes an array of objects representing 
products and returns an array containing only the products that are currently in stock.

3. Write a function that takes an array of objects representing 
users and returns the first user whose email address matches a given email.

4. Write a function that takes an array of objects representing tasks 
and returns true if all the tasks are marked as complete, otherwise returns false.

5. Write a function that takes an array of objects 
representing purchases and returns the total amount spent on those purchases.

6. Write a function that takes an array of numbers as input
 and returns the sum of all the numbers in the array.

7. Write a function that takes an array of strings as input 
and returns a new array with all the strings converted to uppercase.

8. Write a function that takes an array of numbers as input 
and returns a new array with all the even numbers from the original array.

9. Write a function that takes an array of strings as input and returns 
a new array with all the strings that have a length of 4 or less.

 */

/**1. Write a function that takes an array of objects 
representing books and returns an array containing the titles of those books. */
function bookTitles(books) {
  
  const titleArray = [];

  for (const book of books) {
   
    titleArray.push(book.title);
  }

  return titleArray;
}

const books = [
  { title: 'Johnothon Livingston Seagull', author: 'Richard Bach' },
  { title: 'Black Cat', author: 'Edgar Allen Poe' },
  { title: 'A Brief History Of Time', author: 'Stephen Hawking' },
  { title: 'Hannibal Lechter', author: 'Clarice' },
];

const titleArray = bookTitles(books);
console.log(titleArray);

/**2. Write a function that takes an array of objects representing 
products and returns an array containing only the products that are currently in stock. */


    function arrayOfStock(products) {
      
      const productsInStock = [];
       
      for (const product of products) {
       
        if (product.stock > 0) {
         
          productsInStock.push(product);
        }
      }

      return productsInStock;
    }
    const products = [
      { title: 'Football', stock: 333 },
      { title: 'Laptops', stock: 45 },
      { title: 'Iphone', stock: 96 },
      { title: 'Formuler', stock: 9 },
    ];
    
    const productsInStock = arrayOfStock(products);
    console.log(productsInStock); 

/**3. Write a function that takes an array of objects representing 
users and returns the first user whose email address matches a given email.
 */
function userEmails(users, email) {
  
  let userEmails = '';

  for (const user of users) {
    
    if (user.email === email) {
      
      userEmails = user.name;
      break;
    }
  }

  return userEmails;
}

const users = [
  { name: 'Kimmy', email: 'kimmy@gmail.com' },
  { name: 'Angelina', email: 'angelina@gmail.com' },
  { name: 'Lee', email: 'lee@gmail.com' },
];

const user = userEmails(users, 'angelina@gmail.com');
console.log(user); 

    /**4. Write a function that takes an array of objects representing tasks 
and returns true if all the tasks are marked as complete, otherwise returns false. */

function objectTasks(tasks) {
 
  let isComplete = true;

  for (const task of tasks) {
  
    if (task.completed) {
      isComplete = false;
    }
  }
 return isComplete;
}
const tasks = [
  { title: 'Task 1', completed: true },
  { title: 'Task 2', completed: true },
  { title: 'Task 3', completed: false },
];
const isComplete = objectTasks(tasks);
console.log(tasks); 


/**5. Write a function that takes an array of objects 
representing purchases and returns the total amount spent on those purchases.
 */
function totalSpentOnPurchases(purchases) {
  
  let totalSpent = 0;

 
  for (const purchase of purchases) {
    
    totalSpent += purchase.amount;
  }


  return totalSpent;
}
const purchases = [
  { amount: 333.99 },
  { amount: 22.67 },
  { amount: 40.97 },
];

const totalSpent = totalSpentOnPurchases(purchases);
console.log(totalSpent); 

/**6. Write a function that takes an array of numbers as input
 and returns the sum of all the numbers in the array. */

 function arrayOfnumbers(array) {
  
  let sum = 0;

 
  for (const number of array) {
   
    sum += number;
  }

 
  return sum;
}
const array = [1, 2, 3, 4, 333, 3232];

const sum = arrayOfnumbers(array);
console.log(sum);


/**7. Write a function that takes an array of strings as input 
and returns a new array with all the strings converted to uppercase.
 */

function uppercaseStringOfArray(array1) {
 
  let uppercaseStringOfArray = [];

  for (const string of array1) {
  
    const uppercaseString = string.toUpperCase();

    uppercaseStringOfArray.push(uppercaseString);
  }

  return uppercaseStringOfArray;
}

let array1 = ['JavaScript', 'Technosoft', 'Selenium', 'cypress'];


const uppercaseArray = uppercaseStringOfArray(array1);
console.log(uppercaseArray);


/**8. Write a function that takes an array of numbers as input 
and returns a new array with all the even numbers from the original array. */
function evenNumbersArray(array2) {
 
  const evenNumbersArray = [];

  for (const number of array2) {
   
    if (number % 2 === 0) {
     
      evenNumbersArray.push(number);
    }
  }

  return evenNumbersArray;
}
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = evenNumbersArray(array2);
console.log(evenNumbers); 


/**9. Write a function that takes an array of strings as input and returns 
a new array with all the strings that have a length of 4 or less.
 */

function arrayOfLenghthOfStrings(array3) {
  
  const arrayOfLenghthOfStrings = [];

  
  for (const string of array3) {
   
    if (string.length <= 4) {
   
      arrayOfLenghthOfStrings.push(string);
    }
  }

  return arrayOfLenghthOfStrings;
}
const array3 = ['cat', 'Methods', 'Dog', 'Reliable', 'angry'];

const shortStrings = arrayOfLenghthOfStrings(array3);
console.log(shortStrings); 