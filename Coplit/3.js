function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  if(num === 1) return true;

  let temp = 2;

  while(temp <= num) {
    temp = temp * 2;
    if(temp === num) return true;
  }

  return false;
}

let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false