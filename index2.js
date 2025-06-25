// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 2. Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // 3. Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }


// find maximum value
  function findMa(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }

// find minimum value
  function findMin(arr) {
    if (arr.length === 0) return undefined;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    return min;
  }

// sum of elements 
  function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => 
      accumulator + currentValue, 0);
  }

  
// filterArray
  function filterArray(arr, conditionFn) {
    const result = [];
    for (const element of arr) {
      if (conditionFn(element)) {
        result.push(element);
      }
    }
    return result;
  }
  


  function findMax(arr){
    return Math.max(...arr);
  }

  console.log(findMax([5,8,4,19,9]));
  