const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.

  const concatArr = arr1.concat(arr2).sort((a, b) => a - b);

  return concatArr[k - 1];
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3