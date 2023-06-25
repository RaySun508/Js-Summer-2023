/**Spread Code Challenge:
Write a function that takes in two arrays of numbers and returns a new 
array containing all the elements of both arrays*/

function twoArrays(array1, array2) {
    const newArray = [];
    newArray.push(...array1, ...array2);
    return newArray;
  }
  
  const array1 = [1, 2, 3, 4];
  const array2 = [6, 7, 9, 10];
  
  const newArray = twoArrays(array1, array2);
  console.log(newArray); 

/**Write a function that takes in an array of strings and a string to add to the beginning of the array,
 *  and returns a new array with the string added to the beginning. */

  function arrayOfStrings(array, string) {
    return array.map(element => string + element);
  }
  
  const array = ['Hello', 'Elon Musk'];
  const string = ['Modern Day Wizard'];
  
  const newArray1 = arrayOfStrings(array, string);
  
  console.log(newArray1); 

  /**Write a function that takes in an object and a key-value pair 
   * to add to the object, and returns a new object 
   * with the key-value pair added. */

  function addKeyValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
  }
  
  const object = { name: 'Larry' };
  const key = 'age';
  const value = 39;
  
  const newObject = addKeyValue(object, key, value);
  
  console.log(newObject); 
  

  /**Write a function that takes in an array of 
   * numbers and returns the largest number in the array. */

  function findLargestNumber(array3) {
    let largestNumber = array3[0];
  
    for (let i = 1; i <= array3.length; i++) {
      if (largestNumber < array3[i]) {
        largestNumber = array3[i];
      }
    }
  
    return largestNumber;
  }
  
  const array3 = [10, 17, 333, 4, 2, 9, 7, 5, 1];
  const largestNumber = findLargestNumber(array3);
  
  console.log(largestNumber); 