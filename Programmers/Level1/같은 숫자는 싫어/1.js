function solution(arr) {
  // let answer = [];

  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] !== arr[i - 1]) answer.push(arr[i]);
  // }

  // return answer;

  return arr.filter((num, idx) => num !== arr[idx - 1]);
}

console.log(solution([1,1,3,3,0,1,1])); //[1,3,0,1]
console.log(solution([4,4,4,3,3])); //[4,3]