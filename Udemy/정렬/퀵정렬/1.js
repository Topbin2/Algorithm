// pivot 함수를 통해 pivot 인덱스의 값보다 작은 요소들은 왼쪽, 큰 요소들은 오른쪽으로 정렬한다.
function pivot(arr, start = 0, end = arr.length - 1) {
  // function swap(array, i, j) {
  //   let temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  // }

  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// Time Complexity = O(n log n)
// Space Complexity = O(log n)

// const quickSort = function (arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }

//   const lSorted = quickSort(left);
//   const rSorted = quickSort(right);
//   return [...lSorted, pivot, ...rSorted];
// };
