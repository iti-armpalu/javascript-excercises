/*

 * --- Excercise ---
 *  Your task is to implement a binary search algorithm. A binary search algorithm finds an item in a list by repeatedly splitting it in half, only keeping the half which contains the item we're looking for. It allows us to quickly narrow down the possible locations of our item until we find it, or until we've eliminated all possible locations.



 * --- Examples ---
 * find({[[4, 8, 12, 16, 23, 28, 32]], 23}) -> 23
    // We start by comparing 23 with the middle element, 16.
    // Since 23 is greater than 16, we can eliminate the left half of the list, leaving us with [23, 28, 32].
    // We then compare 23 with the new middle element, 28.
    // Since 23 is less than 28, we can eliminate the right half of the list: [23].
    // We've found our item.

 * --- Notes ---
 * - Binary search only works when a list has been sorted.
 * - https://en.wikipedia.org/wiki/Binary_search_algorithm
 */


function find(array, value) {
  if (!array.length) throw new Error('Value not in array');

  // Find the middle element's position of a sorted array and compare it with the item we're looking for.
  let midpoint = Math.round((array.length - 1) / 2);

  if (array[midpoint] === value) return midpoint;

  // If the middle element's value is greater than our value, we can eliminate that element and all the elements after it and call find() recursively again to repeat the process, the new array will be the values from 0 to midpoint
  if (array[midpoint] > value) return find(array.slice(0, midpoint), value);

  // If the middle element is less than our item, we can eliminate that element and all the elements before it and call find() recursively again to repeat the process, the new array will be the values onwards from midpoint position + 1 
  // add midpoint + 1 to get the found item's position in the array
  if (array[midpoint] < value) return find(array.slice(midpoint + 1), value) + midpoint + 1;


}

console.log((find([4, 8, 12, 16, 18, 20, 23, 28], 27)));

// Test how long time it takes to execute:
let start = Date.now();
console.log(find([4, 8, 12, 16, 23, 28, 32], 23));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  let mid;
  while (min <= max) {
    mid = (min + max) >>> 1;
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] < n) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1,2,3,5,56], 4));
