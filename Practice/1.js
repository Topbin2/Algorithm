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

console.log(computeWhenDouble(1)); // 70
console.log(computeWhenDouble(2.3)); // 31
console.log(computeWhenDouble(7)); // 11
console.log(computeWhenDouble(100)); // 1
