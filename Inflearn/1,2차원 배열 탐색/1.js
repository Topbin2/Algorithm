function solution(arr, num) {
  const index = arr.indexOf(num) - 1;
  const newNum = arr[index];
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > newNum) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
let num = 6;
console.log(solution(arr, num));
