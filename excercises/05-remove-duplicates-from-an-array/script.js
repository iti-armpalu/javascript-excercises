/*

 * --- Excercise ---
 * Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

 * --- Examples ---
 * removeDups([1, 0, 1, 0]) ➞ [1, 0]
 * removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
 * removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]


 * --- Notes ---
 * - Tests contain arrays with both strings and numbers.
 * - Tests are case sensitive.
 * - Each array item is unique.

 */

function removeDups(arr) {
  // Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection.
  // So we can make use of this instance and from there we will have to convert that instance into a new array, and that would be it
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  const uniqueArray = [...new Set(arr)];
  return uniqueArray;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John", "John"]));
