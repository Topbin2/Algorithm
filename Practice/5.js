function solution(str1, str2) {

  const result = [0, []];

  for(let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2.length; j++) {
      if(str1[i + j] !== str2[j]) break;
      if(j === str2.length - 1) {
        result[0]++;
        result[1].push(i + 1);
      }
    }
  }

  return result;
}

console.log(solution("ABC ABCDAB ABCDABCDABDE ABCDABD", "ABCDABD"));
