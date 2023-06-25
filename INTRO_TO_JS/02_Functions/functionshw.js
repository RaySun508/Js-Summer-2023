/**Functions Code Challenge:

1. Write a function that takes in an array of numbers 
and returns the sum of all the numbers in the array.

2. Write a function that takes in a string 
and returns the string reversed.

3. Write a function that takes in an array of objects representing 
people, where each object has properties for name, age, and gender, 
and returns an array of objects representing only the 
people who are over the age of 18.

4. Write a function that takes in an array of numbers 
and returns a new array containing only the even numbers from the original array.

5. Write a function that takes in an array of strings and returns
 a new array containing only the strings that start with the letter "A".

 6. Write a function that takes in an array of objects 
representing books, where each object has properties for title, 
author, and published, and returns an array of strings representing 
the titles of all the books published in the year 2000 or later.

7. Write a function that takes in two 
numbers and returns the larger of the two.

8. Write a function that takes in an array 
of numbers and returns the smallest number in the array.

9. Write a function that takes in an array of strings and returns the longest string in the array.

10. Write a function that takes in an array of objects representing students, 
where each object has properties for name and grade, and returns an array of objects 
representing only the students who have a grade of "A".
 */


//1. Write a function that takes in an array of numbers 
//and returns the sum of all the numbers in the array.

function sumArrayOfNumbers(array) {
    return array.reduce((sum, number) => sum + number, 0);
  }
  
  const array = [1, 2, 3, 4, 5, 333, 99, 55];
  const sum = sumArrayOfNumbers(array);
  
  console.log(sum); 
  
  //2. Write a function that takes in a string 
//and returns the string reversed.

function reverseString(string) {
    let reverseString1 = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
      reverseString1 += string[i];
    }
  
    return reverseString1;
  }
  
  const string = 'The World Is Yours';
  const reverseString1 = reverseString(string);
  
  console.log(reverseString1); 
  

  /**3. Write a function that takes in an array of objects representing 
people, where each object has properties for name, age, and gender, 
and returns an array of objects representing only the 
people who are over the age of 18. */


function peopleOverAge18(people) {
    
    
    const over18 = people.map(person => {
      if (person.age > 18) {
        return person;
      } else {
        return 'You Are Under 18';
      }
    });

    return over18;
  }
  
  const people = [
    { name: 'Tori', age: 21, gender: 'female' },
    { name: 'Peter', age: 17, gender: 'male' },
    { name: 'Gregory', age: 25, gender: 'male' },
    { name: 'Angelina', age: 19, gender: 'female' },
  ];
  
  const over18 = peopleOverAge18(people);
  console.log(peopleOverAge18);
  for (const person of over18) {
    console.log(person.name);
  }
  
  /**4. Write a function that takes in an array of numbers 
and returns a new array containing only the even numbers from the original array. */

function onlyEvenNumbers(numbers) {
    const onlyEvenNumbers = numbers.filter(number => number % 2 === 0);
    return onlyEvenNumbers;
  }
  
  const numbers = [1, 2, 3, 3, 333, 4, 53, 66, 7, 8, 9, 10];
  const evenNumbers = onlyEvenNumbers(numbers);
  
  console.log(evenNumbers); 
  
  /**5. Write a function that takes in an array of strings and returns
 a new array containing only the strings that start with the letter "A". */
 
 function arrayOfStrings(strings) {
    const newArray = strings.filter((string) => string.startsWith("A"));
    return newArray;
  }
  
  const strings = ['MasterPlan', 'Ballon', 'Kitty', 'Elephants', 'Alpha', 'Astounding Work'];
  const newArray = arrayOfStrings(strings);
  console.log(newArray); 
  
  /**6. Write a function that takes in an array of objects 
representing books, where each object has properties for title, 
author, and published, and returns an array of strings representing 
the titles of all the books published in the year 2000 or later. */

function publishedBooks(books) {
    
    const newArray = [];
    for (const book of books) {
      
      if (book.published >= 2000) {
    
        newArray.push(book.title);
      }
    }
    return newArray;
  }
  const books = [
    { title: 'JavaScript 101', author: 'Deepak', published: 2023 },
    { title: 'Puff The Magic Dragon', author: 'Raffi', published: 1992 },
    { title: 'The Bible', author: 'Lots Of People', published: 1/1/1000 },
    { title: 'Along Came Polly', author: 'Jennifer Aniston', published: 1995 },
  ];
  
  console.log(books);


  /**7. Write a function that takes in two 
numbers and returns the larger of the two. */

function getLargerNumber(num1, num2) {
    
    if (num1 > num2) {
      
      return num1;
    } else {
      
      return num2;
    }
  }
  const largerNumber = getLargerNumber(10, 20, 333, 56, 34);
console.log(largerNumber); 

  /**8. Write a function that takes in an array 
of numbers and returns the smallest number in the array. */

function getSmallestnumber(num3, num4) {
    if (num3 > num4)
    return num3;

    else {
        return num4;
    }
         }
         const smallestNumber = getSmallestnumber(10, 60, 333, 34, 96, 22);
         console.log(smallestNumber);

      /**9. Write a function that takes in an array of 
       * strings and returns the longest string in the array. */   

      function longestString(strings2) {
        
        let longestString = strings2[0];
      
        for (const string of strings2) {
         
          if (string.length > longestString.length) {
            
            longestString = string;
          }
        }
      
        
        return longestString;
      }
const strings2 = ['My Life', 'I want to be a good Programmer', 'Life is too short to be mad'];

console.log(strings2); 

/**10. Write a function that takes in an array of objects representing students, 
where each object has properties for name and grade, and returns an array of objects 
representing only the students who have a grade of "A".
 */ 

function studentsWithA(students) {
    const newStudentArray = [];
  for (const student of students) {
       if (student.grade === "A") {
        
        newStudentArray.push(student);
      }
    }

    return newStudentArray;
  }
  
  const students = [
    { name: 'Angelina', grade: 'A' },
    { name: 'Toby', grade: 'B' },
    { name: 'Kyle', grade: 'A' },
    { name: 'Aman', grade: 'A' },
  ];
  
  const newStudentArray = studentsWithA(students);
  console.log(newStudentArray); 
  