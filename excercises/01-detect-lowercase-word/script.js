/*

 * --- Excercise ---
 * A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
 * - The wanted word is in lowercase.
 * - The crowd of letters is all in uppercase.
 * - Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

 * --- Examples ---
 * detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
 * detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
 * detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

 */

function detectWord(str) {
	// Search and match all the lowercase letters with RegEx & String.prototype.match()
  // Return value: An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
  const letters = /[a-z]/g;
  const matchingLetters = str.match(letters); // ---> ["c", "a", "t"]

  // Join the array back to a string with Array.prototype.join()
  // Return value: A string with all array elements joined. If arr.length is 0, the empty string is returned.
  const detectedWord = matchingLetters.join(''); // ---> "cat"
  return detectedWord;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
