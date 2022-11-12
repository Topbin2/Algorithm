function solution(nums) {
  let result = [];
  
  for(let i = 0; i < nums.length; i++) {
    if(result.length < nums.length / 2) {
      if(!result.includes(nums[i])) result.push(nums[i]);
    }
  }

  return result.length;
}

console.log(solution([3,1,2,3])); // 2
console.log(solution([3,3,3,2,2,4])); // 3
console.log(solution([3,3,3,2,2,2])); // 2