/*

 * --- Excercise ---
 *  Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

 * --- Examples ---
 * frequencySort([1,1,2,2,2,3]) -> [3,1,1,2,2,2] // '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
 * frequencySort([2,3,1,3,2]) -> [1,3,3,2,2] // '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

 * --- Notes ---
 * - Return the sorted array.

 */

function frequencySort(nums) {

  // new Map() - Creates a new Map object
  const frequency = new Map();

  // loop through the nums and set frequencies 
  for (let n of nums) {
    // You can add elements to a Map with the set() method:
    // The get() method gets the value of a key in a Map:
    frequency.set(n, frequency.get(n) + 1 || 1);
  }
  console.log(frequency)

  // step 1: sort the array increasingly by frequency
  // step 2: if frequencies of a and b are equal (false), then sort decreasingly a and b values.
  // x || y ---> if x is true, return x, if x is false, return y
  return nums.sort((a, b) => frequency.get(a) - frequency.get(b) || b - a);
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 6, 5, -1, -3, 5, 6, -1]));
