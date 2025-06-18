function sumOfDistinctElements(arr1, arr2) {
  const combined = arr1.concat(arr2);
  let sum = 0;

  for (let i = 0; i < combined.length; i++) {
    let count = 0;
    for (let j = 0; j < combined.length; j++) {
      if (combined[i] === combined[j]) {
        count++;
      }
    }
    if (count === 1) {
      sum += combined[i];
    }
  }

  return sum;
}

const arr1 = [3, 1, 5, 9];
const arr2 = [6, 4, 1, 9, 3];

const result = sumOfDistinctElements(arr1, arr2);
console.log(result);  

