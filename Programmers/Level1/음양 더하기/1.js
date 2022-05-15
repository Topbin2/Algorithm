function solution(absolutes, signs) {
  for(let i = 0; i < signs.length; i++) {
    if(!signs[i]) absolutes[i] *= -1;
  }

  return absolutes.reduce((a, b) => a + b);
}

console.log(solution([4,7,12], [true,false,true])); // 9
console.log(solution([1,2,3], [false,false,true])); // 0