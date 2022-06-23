function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  if(num1 === 0) return 0;

  if(num2 === 0) return 'Error: cannot divide by zero';

  let acc = num2;
  let result = 0;

  while(acc <= num1 - num2) {
    acc += num2;
    result = num1 - acc;  
  }

  return result;
}

let output = modulo(25, 4);
console.log(output); // --> 1
