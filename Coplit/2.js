function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.

  let initialValue = 100;
  let year = 0;

  while(initialValue < 200) {
    initialValue += initialValue * (interestRate * 0.01);
    year++; 
  }

  return year;
}

let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8