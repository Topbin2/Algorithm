function solution(s) {
  s = s.toLowerCase().split(' ');

  let result = [];

  for(let i = 0; i < s.length; i++) {
    let str = '';
    for(let j = 0; j < s[i].length; j++) {
      if(j === 0) str += s[i][j].toUpperCase();
      else str += s[i][j];
    }
    result.push(str);
  }

  return result.join(' ');
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"