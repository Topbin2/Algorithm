// 함수는 정렬된 배열과 값을 인자로 받는다.
// 두개의 변수를 선언한다.
// 첫번째 변수는 좌측 인덱스를 나타낸다. 초기값 = 0
// 두번재 변수는 우측 인덱스를 나타낸다. 초기값 = 배열의 길이 - 1
// 좌측 포인터가 우측 포인터 바로 전으로 올 때 까지 반복한다.
// 가운데 지점을 찾는다.
// 원하는 값을 찾으면 인덱스를 리턴한다.
// 중간 포인터가 원하는 값보다 작으면 좌측 포인터를 올린다.
// 즁건 포인터가 원하는 값보다 크면 우측 포인터를 내린다.
// 연산이 끝난 후에도 값을 찾지 못하면 -1를 반환한다.

// function solution(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== val && start <= end) {
//     if (val < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
  
//   if(arr[middle] === val) return middle;
//   return -1;
// }

function solution(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let center = Math.floor((start + end) / 2);

  while(arr[center] !== val && start <= end) {
    if(arr[center] < val) start = center + 1;
    else end = center - 1;
    center = Math.floor((start + end) / 2);
  }

  return arr[center] === val ? center : -1;
}


console.log(solution([2, 5, 6, 9, 13, 15, 28, 30], 6));
console.log(solution([1,2,3,4,5], 3)); // 2
console.log(solution([1,2,3,4,5], 5)); // 4
console.log(solution([1,2,3,4,5], 6)); // -1
