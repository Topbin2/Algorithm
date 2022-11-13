function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") answer += s[i].toUpperCase();
    else answer += s[i].toLowerCase();
  }

  return answer;
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
