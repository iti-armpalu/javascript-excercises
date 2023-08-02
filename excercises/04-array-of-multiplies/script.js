/*

 * --- Excercise ---
 * Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

 * --- Examples ---
 * arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 * arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]


 * --- Notes ---
 * - Notice that num is also included in the returned array.

 */

function arrayOfMultiples(num, length) {

  // Option 1: 
  // Create new empty array, where the numbers will be pushed with array.push() method
  // Use for or while loop iteration to increase the number until the array length reaches, after each iteration push the number to the array
  let array = []
  for (i = 1; i <= length; i++) {
    let n = i * num
    array.push(n)
  }

  return array
}

function arrayOfMultiples2(num, length) {

  // Option 2: 
  // Array.from() - The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object
  // // Generate a sequence of numbers ---> given as argument
  // (_) - is used to indicate unused parameter
  return Array.from({ length }, (_, i) => (i + 1) * num) // or -~i * n which is the same as (i + 1) * num
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples2(12, 10));
