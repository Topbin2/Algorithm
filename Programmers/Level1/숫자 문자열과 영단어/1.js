function solution(s) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = '';

  let str = '';

  for(let i = 0; i < s.length; i++) {
    if(s[i].match(/[0-9]/g)) result += s[i]
    else {
      str += s[i];
      if(str in obj) {
        result += obj[str];
        str = '';
      }
    }
  }

  return Number(result);
}

// function solution(s) {
//   let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//   var answer = s;

//   for(let i=0; i< numbers.length; i++) {
//       let arr = answer.split(numbers[i]);
//       console.log(arr);
//       answer = arr.join(i);
//       console.log(answer);
//   }

//   return Number(answer);
// }

console.log(solution("one4seveneight")); // 1478
// console.log(solution("23four5six7")); // 234567
// console.log(solution("2three45sixseven")); // 234567
// console.log(solution("123")); // 123
