function compressString(str) {
  let result = "";
  let count = 1;
  let prevChar = str[0];

  str = str + " ";

  for (let i = 1; i < str.length; i++) {
    if (prevChar === str[i]) {
      count++;
    } else {
      if (count > 2) {
        result += count;
        result += prevChar;
      } else {
        result += prevChar.repeat(count);
      }
      count = 1;
      prevChar = str[i];
    }
  }

  return result;
}

let output = compressString("abc");
console.log(output); // --> abc

output = compressString("wwwggoppopppp");
console.log(output); // --> 3wggoppo4p
