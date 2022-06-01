

// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }

function isPalindrome(str) {
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];

  if(str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));

  return false;
}

// isPalindrome("tacocat")
  // isPalindrome("acoca")
    // isPalindrome("coc")
      // isPalindrome("o")

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false


console.log(isPalindrome("amanaplanacanalpandemonium"));