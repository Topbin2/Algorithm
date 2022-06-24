// const largestProductOfThree = function (arr) {
//   // TODO: 여기에 코드를 작성합니다.

//   let max = Number.MIN_SAFE_INTEGER;

//   for(let i = 0; i < arr.length - 2; i++) {
//     for(let j = i + 1; j < arr.length - 1; j++) {
//       for(let k = j + 1; k < arr.length; k++) {
//         const largest = arr[i] * arr[j] * arr[k];
//         if(largest > max) max = largest;
//       }
//     }
//   }

//   return max;
// };

const largestProductOfThree = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};


// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-10, -5, -1, 0, 2, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)