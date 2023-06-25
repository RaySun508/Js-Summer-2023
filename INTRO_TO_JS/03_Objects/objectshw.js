/**Objects Code Challenge:


Build Object for Employees: An employee can be represented as an 
object with attributes such as name, age, salary, and job title. 
It can also have functions like work, take a break, and attend a meeting.

Build Object for  Bank accounts: A bank account 
can be represented as an object with attributes such as account number, 
balance, and account type. It can also have functions like deposit, withdraw, and transfer.

Build Object for  Dogs: A dog can be represented as an object
 with attributes such as breed, age, and color. It can also have functions like bark, wag tail, and fetch.

Suppose you are building an e-commerce application and
 you want to create a new Product object with property name, price, manufacturer, category

Now add a description property to the Product object you created

Suppose the price of the Product object you created earlier changes. Now the price increased by $10

Remove the description property from the Product object you created earlier.

Suppose you are building a blog application and you want to
 display a list of all the blog posts. You have an array of blog post
 objects, where each object has properties such as title, 
 author, date, and content. Find out if date field is empty on any object */

/**
1. Build Object for Employees: An employee can be represented as an 
object with attributes such as name, age, salary, and job title. 
It can also have functions like work, take a break, and attend a meeting.
 */

// let employee = {
//   name : 'Larry',
//   age : '39',
//   salary : '345,000',
//   jobTitle : 'CEO',
// }
// console.log(employee);


/**2. Build Object for  Bank accounts: A bank account 
can be represented as an object with attributes such as account number, 
balance, and account type. It can also have functions like deposit, withdraw, and transfer. */

// let bankAccount = {
//     accountNumber : '3566464743', 
//     balance : '435,702',
//     accountType : 'Checking',
// }
//     deposit : function
    


/**Build Object for  Dogs: A dog can be represented as an object
 with attributes such as breed, age, and color. It can also have functions like bark, wag tail, and fetch.

 */

 //let dogs = {
  //breed : 'Chihuhua',
  //age : '4 Years',
  //color : 'White',
 
  //function : 'bark',
  //function : 'wagTail',
  //function : 'fetch',
 //}
 
 //console.log(dogs);

 // Define the Dog object
/**let (dog) {
  breed : 'Chihuahua',
  age ; '7',
  color ; 'beige',
  }
console.log(dog);



dog.make.bark = function() {
  console.log('Woof! Woof!');
};

function : wagTail () {
  console.log('Wagging tail');
};

dog.make.fetch = function() {
  console.log('Fetching the ball!');
};

let myDog = new (dog)('Labrador Retriever', 3, 'Yellow');


console.log(`Breed:, ${dog}`);
console.log(`Age:, ${dog}`);
console.log(`Color:, ${dog}`);

myDog.bark();
myDog.wagTail();
myDog.fetch();*/

function createDog(breed, age, color) {
  return {
    breed : 'Pugh',
    age : 7,
    color : 'Brown',
    
    bark() {
      console.log('Woof! Woof!');
    },
    
    wagTail() {
      console.log('Wagging tail...');
    },
    
    fetch() {
      console.log('Fetching the ball!');
    }
  };
}
const myDog = createDog('Pugh', 7, 'Brown');

console.log('Breed:', myDog.breed);

console.log('Age:', myDog.age);

console.log('Color:', myDog.color);

myDog.bark();
myDog.wagTail();
myDog.fetch();

/**Suppose you are building an e-commerce application and
 you want to create a new Product object with property name, price, manufacturer, category */

const product = {
  name: 'Sea Shell Necklace',
  price: 23.99,
  manufacturer: 'The Storm',
  category: 'Home Made Goods',
};

console.log(product.name); 

console.log(product.price); 

console.log(product.manufacturer); 

console.log(product.category); 

/**Now add a description property to the Product object you created */

console.log(product.description);
console.log('The Best Necklace In The World');

/**Suppose the price of the Product object you created earlier changes. Now the price increased by $10 */

let newPrice = (product.price + 10);
console.log(newPrice);


/**Remove the description property from the Product object you created earlier. */

delete product.description;
console.log(product);

/**Suppose you are building a blog application and you want to
 display a list of all the blog posts. You have an array of blog post
 objects, where each object has properties such as title, 
 author, date, and content. Find out if date field is empty on any object */ 


const blogApp = [
  {
    title: 'My First Blog Posting',
    author: 'Theodore',
    date: new Date(),
    content: 'Fun in the Sun',
  },
  {
    title: 'My Second Blog Posting',
    author: 'Kristine',
    date: 10/15/2000,
    content: 'I baked My First Cake',
  },
  {
    title: "My Third Blog Post",
    author: 'Tristen',
    date: '',
    content: 'I bought a new Puppy today',
  },
];

// Check if the date field is empty on any object in the array
let checkEmptyDate = blogApp.some((blogApp) => {
  return !blogApp.date || blogApp.date === '';
});

console.log(checkEmptyDate); 