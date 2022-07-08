const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  const stack = [1];
  
  let count = 2;

  while(stack.length !== n) {
    if(!(count % 2) || !(count % 3) || !(count % 5)) {
      stack.push(count);
    }
    count++;
  }

  console.log(stack);
  return stack[n - 1];
};

// let result = uglyNumbers(1);
// console.log(result); // --> 1

result = uglyNumbers(15);
console.log(result); // --> 3