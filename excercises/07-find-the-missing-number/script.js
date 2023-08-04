/*

 * --- Excercise ---
 * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

 * --- Examples ---
 * missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 * missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 * missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

 * --- Notes ---
 * - The array of numbers will be unsorted (not in order).
 * - Only one number will be missing.

 */

function missingNum(arr) {

  // We know that all arrays will have numbers from 1 to 10, so we can generate an array containing all these numbers with Array.from method
  // We can find the expected total of these numbers with array.reduce() method
  const expectedSum = Array.from({length: 10}, (_, i) => i + 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Then we will find the current array total with array.reduce() mehod
  const arraySum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // The difference is those totlas will be the missing number from the array
  const missingNumber = expectedSum - arraySum
  return missingNumber;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));