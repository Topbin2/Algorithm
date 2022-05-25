function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.

  let result = '';

  for(let i = 0; i < str.length; i++) {
    result += str[i];
    if(isOdd(str[i]) && isOdd(str[i + 1])) result += '-';
  }

  return result; 
}

function isOdd(num) {
  if(num % 2) return true;
}

let output = insertDash('454793');
console.log(output); // --> 4547-9-3