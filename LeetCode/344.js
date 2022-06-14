var reverseString = function(s) {

  if(s.length === 1) return s;
  

  return s[0] + reverseString(s.slice(1));
};

let s = ["h","e","l","l","o"]
console.log(reverseString(s));

s = ["H","a","n","n","a","h"]
console.log(reverseString(s));
