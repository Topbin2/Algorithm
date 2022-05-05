// function solution(arr) {
//   let newArr = [];

//   if(arr.length === 0) {
//     return newArr;
//   }

//   if(arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }

//   newArr = newArr.concat(solution(arr.slice(1)));
//   return newArr;
// }

function solution(arr) {
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }

  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(solution(arr.slice(1)));
  return newArr;
}

console.log(solution([1,2,3,4,5]));

// [1].concat(solution([2,3,4,5])) -> [1,3,5]
    // [].concat(solution([3,4,5])) -> [3,5]
        // [3].concat(solution([4,5])) -> [3,5]
            // [].concat(solution([5])) -> [5]
                // [5].concat(solution([])) -> [5]