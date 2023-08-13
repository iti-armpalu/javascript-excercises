/*

 * --- Excercise ---
 * Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

 * --- Examples ---
 * sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!" // 7 contains the number seven.
 * sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array" // None of the items contain 7 within them.
 * sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!" // 97 contains the number seven.


 * --- Notes ---
 * - 

 */

function sevenBoom(arr) {
  let result = Array.from(arr.join(""), Number);
  let checkSeven = result.includes(7);
  return checkSeven ? "Boom!" : "There is no 7 in the array";
}

function sevenBoom2(arr) {
  let result = arr.join("");
  const globalRegex = new RegExp("7", "g");
  let checkSeven = globalRegex.test(result);
  return checkSeven ? "Boom!" : "There is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));

console.log(sevenBoom2([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom2([8, 6, 33, 100]));
console.log(sevenBoom2([700, 55, 60, 97, 86]));
