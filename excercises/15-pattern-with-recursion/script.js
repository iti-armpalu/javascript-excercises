/*

 * --- Excercise ---
 *  Given a positive integer n. Print the inverted triangular pattern (as described in the examples below) using the recursive approach.

 * --- Examples ---
 * pattern(5) -> 
 *  * * * * *
    * * * *
    * * *
    * *
    *

 * --- Notes ---
 * 

 */

// Option 1
// function to print the pattern with loop
function patternWithLoop(num) {
  let string = "";

  // outer loop for new line
  for (let i = 0; i < num; i++) {
    // inner loop for printing star per num
    for (let k = 0; k < num - i; k++) {
      string += "$ ";
    }
    string += "\n";
  }
  return string;
}

console.log(patternWithLoop(5));

// Option 2
// function to print the pattern with loop & recursion
function patternWithRecursion(num) {
  // base case
  if (num == 0) {
    return;
  }
  let star = "";
  // loop for printing star per num
  for (let i = 0; i < num; i++) {
    star += "* ";
  }
  // log
  console.log(star);
  patternWithRecursion(num - 1);
}

patternWithRecursion(5);

// Option 3
function printPatternRowRecursion(n) {
  // base condition
  if (n < 1) return;

  // print the remaining stars
  // of the n-th row recursively
  // evidently, it is not possible to call console.log() without a newline, so we print the pattern to screen
  document.write("# ");
  printPatternRowRecursion(n - 1);
}

function printPatternRecursion(n) {
  // base condition
  if (n < 1) return;

  // print the stars of the n-th row
  printPatternRowRecursion(n);

  // move to next line
  document.write("<br>");

  // print stars of the
  // remaining rows recursively
  printPatternRecursion(n - 1);
}

printPatternRecursion(5);
