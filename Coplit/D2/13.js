function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.

  let result = '';

  const mappedLength = arr.map((str) => str.length);

  const maxLength = Math.max(...mappedLength);

  for(let i = 0; i < maxLength; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j][i]) result += arr[j][i];
    }
  }

  return result;
}

let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'