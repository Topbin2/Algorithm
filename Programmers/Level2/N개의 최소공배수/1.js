
// 두수의 곱 = 최대공약수 * 최소공배수
// 최소공배수 = 두 수의 곱 / 최대 공약수
function maxDivisors(num1, num2) {
  const max = Math.max(num1, num2);
  let result = 0;

  for(let i = 1; i <= max; i++) {
    if(num1 % i === 0 && num2 % i === 0) result = i;
  }

  return result;
}

function solution(arr) {
  let minMultiple = (arr[0] * arr[1]) / maxDivisors(arr[0], arr[1]);

  for(let i = 2; i < arr.length; i++) {
    minMultiple = (minMultiple * arr[i]) / maxDivisors(minMultiple, arr[i]);
  }

  return minMultiple;
}



console.log(solution([2,6,8,14])); // 168
console.log(solution([1,2,3])); // 6