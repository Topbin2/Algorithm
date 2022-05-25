function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.

  let result = '';

  for(let i = 0; i < str.length; i++) {
    if(i === 0) {
      result += str[i].toUpperCase();
      continue;
    }
    
    if(str[i - 1] === ' ') result += str[i].toUpperCase();
    else result += str[i];
  }

  return result;
}

let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "