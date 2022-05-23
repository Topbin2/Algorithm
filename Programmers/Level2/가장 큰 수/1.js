function solution(numbers) {
      
  const convertToStr = numbers.map((num) => String(num));
      
  convertToStr.sort((a, b) => {
    return  b + a - (a + b)
  });
  
  console.log(convertToStr);

  if(convertToStr[0] === '0') {
    return '0';
  } else {
    return convertToStr.join('');
  }
}

// 첫번째 반복
// 3, 30 -> 303 - 330 -> [3,30,34,5,9]
// 3, 34 -> 343 - 334 -> [34,30,3,5,9]
// 34, 5 -> 534 - 345 -> [5,30,3,34,9]
// 5, 9 -> 95 - 59 -> [9,30,3,34,5]

//두번째 반복
// 30, 3 -> 330 - 303 -> [9,3,30,34,5]
// 3, 34 -> 343 - 334 -> [9,34,30,3,5]
// 34, 5 -> 534 - 345 -> [9,5,30,3,34]

//세번째 반복
// 30, 3 -> 330 - 303 -> [9,5,3,30,34]
// 3, 34 -> 343 - 334 -> [9,5,34,30,3]

//네번째 반복
// 30, 3 -> 330 - 303 -> [9,5,34,3,30] 


console.log(solution([3,30,34,5,9])); // '9534330'
console.log(solution([0,0,0,0,0]));

