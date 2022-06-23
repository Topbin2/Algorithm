function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  num = Math.abs(num);

  if(num === 0) return false;
  if(num === 1) return true;

  return isOdd(num - 2);
}

let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false