function solution(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(solution([1,5,2,6,4,3]));

// 1,5,5