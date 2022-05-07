// function solution(arr) {
//   for(let i = arr.length; i > 0; i--) {
//     for(let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if(arr[j] > arr[j + 1]) {
//         //swap
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function solution(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for(let i = arr.length; i > 0; i--) {
//     for(let j = 0; j < i - 1; j++) {
//       if(arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// }

function solution(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  let noSwap;
  for(let i = arr.length; i > 0; i--) {
    noSwap = true;
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if(noSwap) break;
  }

  return arr;
}

console.log(solution([37,45,29,8, 12,88,100,-3]));
console.log(solution([8,1,2,3,4]));
// 1,2,3,4,8
