/*

 * --- Excercise ---
 *  Given a number determine whether or not it is valid per the Luhn formula. The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers. The task is to check if a given string is valid.

 * --- Examples ---
 * luhn('4539 3195 0343 6467') -> "The number is valid"
 * luhn('8273 1232 7352 0569') -> "The number is invalid"

 * --- Notes ---
 * - Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.
 *  - https://en.wikipedia.org/wiki/Luhn_algorithm
 */

function checkLuhn(str) {
  // Remove all the whitespaces from the string and get the string length
  let ccNumber = str.replace(/\s+/g, "");
  let nDigits = ccNumber.length;

  // set the initial sum to 0
  let nSum = 0;

  // set the first loop number to false
  let isSecond = false;

  // Double the value of every other digit from right to left, beginning with the second to last digit.
  // Use for loop to start looping from the end of the string
  for (let i = nDigits - 1; i >= 0; i--) {
    let d = ccNumber[i].charCodeAt() - "0".charCodeAt();

    if (isSecond == true) d = d * 2;

    // We add two digits to handle
    // cases that make two digits
    // after doubling
    nSum += parseInt(d / 10, 10);
    nSum += d % 10;

    isSecond = !isSecond;
  }

  return nSum % 10 == 0;
}

console.log(checkLuhn("4111111111111111"));
console.log(checkLuhn("4624 74823 324 9780"));

// Test how long time it takes to execute:
let start = Date.now();
console.log(checkLuhn("4624 7482 3324 9080"));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");


