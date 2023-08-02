/*

 * --- Excercise ---
 * Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

 * --- Examples ---
 * num_of_digits(1000) ➞ 4
 * num_of_digits(12) ➞ 2
 * num_of_digits(1305981031) ➞ 10

 * --- Notes ---
 * - Try to solve this challenge without using strings!

 */

function num_of_digits(num) {
	// Large numbers - Given an integer n, one can determine j, the number of digits in n, by working with the inequality
  // For any positive integer n, the number of digits in n is [log10 n] + 1 <--- https://brilliant.org/wiki/finding-digits-of-a-number/

  // Make sure the num is positive aka returns the absolute value of a number with Math.abs()
  // Math.log10() <--- this function is the equivalent of Math.log(x) / Math.log(10)
  // Math.floor() <--- to round down to the largest integer less than or equal to a given number
  const numDigits = Math.floor((Math.log10(Math.abs(num))) + 1)
  return numDigits
}

console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(2));
console.log(num_of_digits(1));
