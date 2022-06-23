function arrSum(arr) {
  // TODO: 여기에 코드를 작성합니다.

  if(arr.length === 1) return arr[0];

  return arr[0] + arrSum(arr.slice(1));
}

let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1