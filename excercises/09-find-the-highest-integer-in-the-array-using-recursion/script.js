/*

 * --- Excercise ---
 * Create a function that finds the highest integer in the array using recursion.
 
 * --- Examples ---
 * findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99
 * findHighest([0, 12, 4, 87]) ➞ 87


 * --- Notes ---
 * - Please use the recursion to solve this (not the max() method).

 */

function findHighest(arr) {
  let n = arr.length;

  // If array length = 1 means whole array
  // has been traversed
  if (n == 1) {
    return arr[0];
  } else {
    let res = findHighest(arr.slice(1));
    let ret = res >= arr[0] ? res : arr[0];
    return ret;
  }
}

console.log(findHighest([-1, 3, 5, 6, 99, 12, 2]));
console.log(findHighest([0, 12, 4, 87]));
