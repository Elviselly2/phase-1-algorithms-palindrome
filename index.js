function isPalindrome(str) {
  // Write your algorithm here
  // Reverse the string
  const reversedStr = str.split('').reverse().join('');
  
  // Check if the original string matches the reversed string
  return str === reversedStr;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

/* 
  Add your pseudocode here
  writing the fuction with a string agument
  reverse the string
  chech if original string=== reversed string
  test the cases
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
