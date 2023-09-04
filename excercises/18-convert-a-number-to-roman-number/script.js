/*

 * --- Excercise ---
 *  Write a function to convert from normal numbers to Roman Numerals.



 * --- Examples ---
 * romanize(2008) -> MMVIII
 * romaize(1990) -> MCMXC

 * --- Notes ---


 */


function romanize(num) {

  let roman = ``;

  // Create a lookup object for the roman numbers
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }

  return roman;
}

console.log(romanize(1990));
console.log(romanize(17));

// Test how long time it takes to execute:
let start = Date.now();
console.log(romanize(2008));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
