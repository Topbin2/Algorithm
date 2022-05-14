function solution(d, budget) {
  let result = 0;
  let sum = 0;
  d.sort((a, b) => a - b);
  for(let x of d) {
    sum += x;
    if(sum > budget) break;
    result++
  }
  return result;
}


//1,1 -> 3,2 -> 6,3 -> 10 break
//2.1 -> 4,2 -> 7,3 ->
console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //4
