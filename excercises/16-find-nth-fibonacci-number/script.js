/*

 * --- Excercise ---
 *  The Fibonacci sequence is a classic use case for recursive functions since the value of the sequence at a given index is dependent on the sum of the last two values. However, the recursion tree created by solving the Fibonacci sequence recursively can grow quite fast. Therefore it can be important to think about the implications of running a function recursively. Depending on the size of n needed and the capabilities of the system in question you might want to take a different approach.

 * --- Examples ---
 * fib(6) ➞ 8 // 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * fib(1) ➞ 1
 * fib(2) ➞ 1

 * --- Notes ---
 * - Inputs will be whole numbers >= 0

 */

// Iterative Approach to Find and Print Nth Fibonacci Numbers:
function fib(n) {
  let a = 0,
    b = 1,
    c,
    i;
  if (n == 0) return a;
  if (n == 1) return b;
  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(fib(6));
console.log(fib(1));
console.log(fib(2));
console.log(fib(20));

// Test how long time it takes to execute:
let start = Date.now();
console.log(fib(40));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");


// Dynamic Programming Approach to Find and Print Nth Fibonacci Numbers:
// If you see, the same method call is being done multiple times for the same value. This can be optimized with the help of Dynamic Programming. We can avoid the repeated work done in the Recursion approach by storing the Fibonacci numbers calculated so far.
function fib2(n) {
  /* Declare an array to store Fibonacci numbers. */
  let fArray = new Array(n + 2); // 1 extra to handle case, n = 0
  let i;
  /* 0th and 1st number of the series are 0 and 1 */
  fArray[0] = 0;
  fArray[1] = 1;
  for (i = 2; i <= n; i++) {
    /* Add the previous 2 numbers in the series
            and store it */
    fArray[i] = fArray[i - 1] + fArray[i - 2];
  }
  return fArray[n];
}

console.log(fib2(6));
console.log(fib2(1));
console.log(fib2(2));
console.log(fib2(20));

// Recursive Approach to Find and Print Nth Fibonacci Numbers:
// Because the function calls itself, which in turn calls itself, and so on until it reaches the base case, the number of function calls rises exponentially based on the original index parameter passed in. In short, your computer will likely hate you if you try to pass in any number above 50. So for that reason, our recursive Fibonacci function feels a bit redundant.
function fib3(n) {
  if (n < 2) {
    return n;
  }

  return fib3(n - 1) + fib3(n - 2);
}

console.log(fib3(6));
console.log(fib3(1));
console.log(fib3(2));
console.log(fib3(20));

// Memoized Recursive Approach to Find and Print Nth Fibonacci Numbers:
// Memoization is essentially the concept of storing the output from a function so that it can be used again in the future. We basically retrieve the value from a cache instead of calling the function again. The concept of memoization is something that we can use to make our recursive Fibonacci function much more efficient. 
function fib4(n, cache = [0, 1]) {
  if (cache[n]) {
    return cache[n]
  }
  if (n < 2) {
    return n;
  }

  return fib3(n - 1, cache) + fib3(n - 2, cache);
}

console.log(fib4(6));
console.log(fib4(1));
console.log(fib4(2));
console.log(fib4(20));
