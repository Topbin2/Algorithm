function arrProduct(arr) {
  // TODO: 여기에 코드를 작성합니다.

  if(arr.length === 0) return 1;

  return arr[0] * arrProduct(arr.slice(1));
}


let output = arrProduct([1, -2, 1, 3]);
console.log(output); // --> -6