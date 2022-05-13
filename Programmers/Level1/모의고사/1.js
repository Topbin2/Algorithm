// function solution(answers) {
//   const one = [1,2,3,4,5];
//   const two = [2,1,2,3,2,4,2,5];
//   const three = [3,3,1,1,2,2,4,4,5,5];

//   const result = [0, 0, 0];

//   for(let i = 0; i < answers.length; i++) {
//       if(one[i % 5] === answers[i]) result[0]++;
//       if(two[i % 8] === answers[i]) result[1]++;
//       if(three[i % 10] === answers[i]) result[2]++;
//   }

//   const answer = [];
//   const max = Math.max(...result);

//   for(let i = 0; i < result.length; i++) {
//     if(result[i] === max) answer.push(i + 1);
//   }

//   return answer;
// }

function solution(answers) {
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const m1Result = answers.filter((num, idx) => num === man1[idx % 5]).length;
  const m2Result = answers.filter((num, idx) => num === man2[idx % 8]).length;
  const m3Result = answers.filter((num, idx) => num === man3[idx % 10]).length;

  const max = Math.max(m1Result, m2Result, m3Result);

  const result = [];

  if(max === m1Result) result.push(1);
  if(max === m2Result) result.push(2);
  if(max === m3Result) result.push(3);

  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
