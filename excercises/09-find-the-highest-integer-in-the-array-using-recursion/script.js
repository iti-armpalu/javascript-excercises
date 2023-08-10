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
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
    let res = findHighest(arr.slice(1));
    let ret = res >= arr[0] ? res : arr[0];
    return ret;
  }
}

console.log(findHighest([-1, 3, 5, 6, 99, 12, 2]));
console.log(findHighest([0, 12, 4, 87]));


// Recursion logic

// findHighest([-1, 3, 5, 6, 99, 12, 2]) {
//   // length is 7
//   // res(1)
//   var res = findHighest([3, 5, 6, 99, 12, 2]) {
//     // length is 6
//     // res(2)
//     var res = findHighest([5, 6, 99, 12, 2]) {
//       // length is 5
//       // res(3)
//       var res = findHighest([6, 99, 12, 2]) {
//         // length is 4
//         // res(4)
//         var res = findHighest([99, 12, 2]) {
//           // length is 3
//           // res(5)
//           var res = findHighest([12, 2]) {
//             // length is 2
//            // res(6)
//             var res = findHighest([2]) {
//               // length is 1!! BINGO! now we can start exiting.
//               return arr[0]; // res(6) becomes 2
//             }
//             var ret = res >= arr[0] ? res : arr[0]; // 2 >= 12? no, return arr[0]
//             return ret; // res(5) becomes 12
//           }
//           var ret = res >= arr[0] ? res : arr[0]; // 12 >= 99? no, return arr[0]
//           return ret; // res(4) becomes 99
//         }
//         var ret = res >= arr[0] ? res : arr[0]; // 99 >= 6? YES! return res(4)
//         return ret // res(3) becomes 99
//       }
//       var ret = res >= arr[0] ? res : arr[0]; // 99 >= 5? YES! return res(3)
//       return ret // res(2) becomes 99
//     }
//     var ret = res >= arr[0] ? res : arr[0]; // 99 >= 3? YES! return res(2)
//     return ret // res(1) becomes 99
//   }
//   var ret = res >= arr[0] ? res : arr[0]; // 99 >= -1? YES! return res(1)
//   return ret // your final value of 99
// }