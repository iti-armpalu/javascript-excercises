/*

 * --- Excercise ---
 * Given an input string, reverse the string word by word, the first word will be the last, and so on.
 
 * --- Examples ---
 * reverseWords(" the sky is blue") ➞ "blue is sky the"
 * reverseWords("hello   world!  ") ➞ "world! hello"
 * reverseWords("a good example") ➞ "example good a"

 * --- Notes ---
 * - A word is defined as a sequence of non-space characters.
 * - The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
 * - You need to reduce multiple spaces between two words to a single space in the reversed string.
 * - Try to solve this in linear time.

 */

function reverseWords(string) {

  // Step 1: split the string into array elments with string split() method
  // Step 2: filter out the spaces by using filter() method and only return if string is not empty
  // Step 3: use the reverse() method to reverse the array
  // Step 4: use array join() method to turn the array back into a string

  let reversedString = string.split(' ').filter(v => v != '').reverse().join(' ');
  return reversedString;

}

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a    good    example   "));