function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.

  if(!str) return '';

  let result = str[0];

  for(let i = 1; i < str.length; i++) {
    if(str[i] === ' ') result += str[i + 1];
  }

  return result;
}



let output = firstCharacter('hello world');
console.log(output); // --> "hw"

output = firstCharacter(
  'The community at Code States might be the biggest asset'
);
console.log(output); // --> "TcaCSmbtba"