function solution(arr1, arr2) {
  const result = new Array(arr2.length).fill(0);
 
  // [0, 0, 0, 0, 0, 0, 0, 0,]

  arr1.sort((a, b) => a - b);
  
  for(let i = 0; i < arr2.length; i++) {
    if(search(arr2[i], arr1)) result[i] = 1;
  }

  return result;
}

function search(num, arr) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    const mid = Math.floor((start + end) / 2);
    if(arr[mid] === num) return true;
    else if(arr[mid] < num) start = mid + 1;
    else if(arr[mid] > num) end = mid - 1;
  }

  return false;
}

console.log(solution([6,3,2,10,-10], [10, 9, -5, 2, 3, 4, 5, -10]));


