function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.

  let sum = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] <= sum) return false;

    sum += arr[i];
  }

  return true;
}

let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false