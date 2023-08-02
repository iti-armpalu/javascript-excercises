/*

 * --- Excercise ---
 * Create a function that returns an array of strings sorted by length in ascending order.

 * --- Examples ---
 * sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
 * sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
 * sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
 * sortByLength([]) ➞ []

 * --- Notes ---
 * - Strings will have unique lengths, so don't worry about comparing two strings with identical length.
 * Return an empty array if the input array is empty (see example #4).

 */

function sortByLength(arr) {
	// Sort the array based on character length with Array.prototype.sort() method
  // Return value: The reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.
  // Get the string length with string.length property, so you get numbers to compare with sort arguments
  const sorted = arr.sort((a, b) => a.length - b.length)
  return sorted
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["may", "april", "september", "august"]));
console.log(sortByLength([]));
