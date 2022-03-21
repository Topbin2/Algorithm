function solution(arr) {
  let answer = arr;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (arr[i] + arr[j] === 40) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        break;
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
