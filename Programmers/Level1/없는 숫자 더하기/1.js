function solution(numbers) {
  // let result = 0;
  // for(let i = 0; i < 10; i++) {
  //   if(!numbers.includes(i)) result += i;
  // }
  // return result;

  const allNum = [0,1,2,3,4,5,6,7,8,9];

  return allNum.filter(num => !numbers.includes(num)).reduce((acc, sum) => acc + sum);
}

console.log(solution([1,2,3,4,6,7,8,0])); //14
console.log(solution([5,8,4,0,6,7,9])); //6
