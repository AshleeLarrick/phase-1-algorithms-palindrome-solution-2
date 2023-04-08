function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }
  }

  return true;
}

/* 
  first letter is the esame as the last letter and so on throughout the 
  word until you reach the middle of the word

  iterate from the beginning to the middle of the word and check
  if each letter matches

  if they match it will return true
  if they don't match it will return false
*/

/*
  if the value of the word is not a palidrome the code will return false
  if the value of the word is equal to a palidrome the code will return true
  it will iterate through half the lenght of the word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
}

module.exports = isPalindrome;
