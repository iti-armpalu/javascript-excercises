/*

 * --- Excercise ---
 * Create a function that moves all capital letters to the front of a word.

 * --- Examples ---
 * capToFront("hApPy") ➞ "APhpy"
 * capToFront("moveMENT") ➞ "MENTmove"
 * capToFront("shOrtCAKE") ➞ "OCAKEshrt"

 * --- Notes ---
 * - Keep the original relative order of the upper and lower case letters the same.

 */

function capToFront(s) {

  // Option 1
  // Find and match all the capitals in the string with RegEx
  // Return value is an array of individual character matches, so we want to join that array to a string
  const capLetters = /[A-Z]/g
  const onlyCapitals = (s.match(capLetters)).join('')

  // Find and match all the lowercase leters in the string with RegEx
  // Return value is an array of individual character matches, so we want to join that array to a string
  const lowercaseLetters = /[a-z]/g
  const onlyLowercase = (s.match(lowercaseLetters)).join('')

  // Concat the capital string with the lowercase string
  return onlyCapitals.concat(onlyLowercase);
}

function capToFront2(s) {

  // Option 2
  // string.replace(pattern, replacement)
  // Pattern - find all capital letters
  // Replacement - can be a string or a function - If it's a function, it will be invoked for every match and its return value is used as the replacement text. 
  // function can have an argument - match - which is the matched substring (or a capital letter in our case)
  let onlyCapitals = ''
  const noCapitals = s.replace(/[A-Z]/g, function (match) {
    // add each match to the onlyCapitals string
    onlyCapitals += match;
    // return the string with leftovers aka lowercase letters
    return '';
  })

  // Concat the capital string with the lowercase string
  return onlyCapitals.concat(noCapitals);
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
console.log(capToFront2("hApPy"));
console.log(capToFront2("moveMENT"));
console.log(capToFront2("shOrtCAKE"));