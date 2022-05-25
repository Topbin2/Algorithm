function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ' && str[i + 1] === ' ') continue;
    else result += str[i];
  }

  return result;
}

let output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"