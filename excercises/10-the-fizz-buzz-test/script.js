/*

 * --- Excercise ---
 * Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

 * --- Examples ---
 * fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
 * fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]


 * --- Notes ---
 * - Make sure to return an array.

 */

function fizzBuzz(number) {

  // Create an empty array where you push the numbers or strings
  // Loop through the array, and check each array element
  // Set "number" as the array length and start looping from integer 1
  // First check: if the current looped number is divisible both 3 and 5 at the same time, push "FizzBuzz" to the array
  // Second check: if the current looped number is divisible with 3, push "Fizz" to the array
  // Third check: if the current looped number is divisible with 5, push "Buzz" to the array
  // If none of the check above are true, then push the i to the array

  let newArray = [];

  for (let i = 1; i <= number; i++) {
    i % 3 === 0 && i % 5 === 0
      ? newArray.push("FizzBuzz")
      : i % 3 === 0
        ? newArray.push("Fizz")
        : i % 5 === 0
          ? newArray.push("Buzz")
          : newArray.push(i);
  }

  return newArray;
}

console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(60));

