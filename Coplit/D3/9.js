const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.

  const zeroIndex = binarySearch(rotated, 0);
  const splicedArr = rotated.splice(0, zeroIndex);
  const sortedArr = rotated.concat(splicedArr);
  const targetIndex = binarySearch(sortedArr, target);
  
  return targetIndex === -1 ? targetIndex : targetIndex + splicedArr.length;
};

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    if (arr[mid] > target) end = mid - 1;
  }

  return -1;
}

let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
