/*

 * --- Excercise ---
 *  Your task is to count how many times each word occurs in a subtitle of a drama. The subtitles from these dramas use only ASCII characters. The characters often speak in casual English, using contractions like they're or it's. Though these contractions come from two words (e.g. we are), the contraction (we're) is considered a single word.

 * --- Examples ---
 * countWords(`"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`) -> 
    123: 1
    agent: 1
    cried: 1
    fled: 1
    i: 1
    password: 2
    so: 1
    special: 1
    that's: 1
    the: 2

 * --- Notes ---


 */

// Option 2: for loop
function countWords(str) {
  let wordsArray = str
    // string to lowercase
    .toLowerCase()
    // match this string against a regular expression, returs an array
    // \w+ matches one or more alphanumeric characters (an easy way to deal with all the words that aren't contractions)
    // ' looks for apostrophes that follow word characters (so eliminates beginning single quotes)
    // \w+ makes sure the apostrophe has any number of word characters that follow it (so this technically works for words like y'all)
    // ? says the stuff in parentheses is optional as not all words are contractions
    // g matches the whole string
    .match(/\w+('\w+)?/g);

  //
  // The Object.create() static method creates a new object
  const countedWords = Object.create(null);

  //
  for (const word of wordsArray) {
    const currCount = countedWords[word] ?? 0;
    countedWords[word] = currCount + 1;
  }

  return countedWords;
}

// Test how long time it takes to execute:
let start = Date.now();
console.log(
  countWords(
    `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled. The miniature pet elephant became the envy of the neighborhood.The sudden rainstorm washed crocodiles into the ocean. It was at that moment that he learned there are certain parts of the body that you should never Nair. Art doesn't have to be intentional. She had the gift of being able to paint songs.`
  )
);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

// Option 2: reduce()
// According to MDN: This code is ill-performing, because each iteration has to copy the entire object, which could be big, depending how many unique words there are. This code has worst-case O(N^2) performance
function countWords2(str) {
  let countedWords = str
    // string to lowercase
    .toLowerCase()
    // match this string against a regular expression, returs an array
    // \w+ matches one or more alphanumeric characters (an easy way to deal with all the words that aren't contractions)
    // ' looks for apostrophes that follow word characters (so eliminates beginning single quotes)
    // \w+ makes sure the apostrophe has any number of word characters that follow it (so this technically works for words like y'all)
    // ? says the stuff in parentheses is optional as not all words are contractions
    // g matches the whole string
    .match(/\w+('\w+)?/g)

    //  spread operator (...) expands the accumulator to a new array.
    // ~~ turns undefined into 0
    .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {});

  return countedWords;
}

// Test how long time it takes to execute:
let start2 = Date.now();
console.log(
  countWords2(
    `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled. The miniature pet elephant became the envy of the neighborhood.The sudden rainstorm washed crocodiles into the ocean. It was at that moment that he learned there are certain parts of the body that you should never Nair. Art doesn't have to be intentional. She had the gift of being able to paint songs.`
  )
);
let timeTaken2 = Date.now() - start2;
console.log("Total time taken : " + timeTaken2 + " milliseconds");
