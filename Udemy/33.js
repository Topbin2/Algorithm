const maxSubarraySum = (arr, num) => {
  let result = 0;
  let max = 0;
  for (let i = 0; i < arr.length - num; i++) {
    result = 0;
    for (let j = 0; j < num; j++) {
      result += arr[i + j];
    }
    if (max < result) {
      max = result;
    }
  }
  return max;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
