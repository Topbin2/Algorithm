function solution(str1, str2) {
  let i = 0;
  let j = 0;

  while(j < str2.length) {
    if(str1[i] === str2[j]) i++;
    if(i === str1.length) return true;
    j++;
  }
  
  return false;
}

console.log(solution('hello', 'hello world'));  //true
console.log(solution('sing', 'sting')); //true
console.log(solution('abc', 'abracadabra')); //true
console.log(solution('abc', 'acb')); //false

