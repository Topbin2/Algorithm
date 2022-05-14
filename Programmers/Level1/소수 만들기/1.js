function solution(nums) {
  let result = 0;

  for(let i = 0; i < nums.length - 2; i++) {
    for(let j = i + 1; j < nums.length - 1; j++) {
      for(let k = j + 1; k < nums.length; k++) {
        console.log(nums[i],nums[j],nums[k]);
        if(isPrime(nums[i] + nums[j] + nums[k])) result++;
      }
    }
  }

  return result;
}

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false;
  }
  return true;
}

console.log(solution([1,2,3,4])); // 1
console.log(solution([1,2,7,6,4])); // 4

// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));