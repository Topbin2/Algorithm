function solution(new_id) {
  new_id = new_id.toLowerCase();
  let newStr = new_id.replace(/[^a-z0-9._-]/g, "");

  let str = "";
  
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === ".") {
      if(newStr[i + 1] === '.') continue;
      else {
        if(str === '') continue;
        else str += '.';
      }
    } else {
      str += newStr[i];
    }
  }

  let answer = '';

  // 15자 이상 제거
  for(let i = 0; i < str.length; i++) {
    if(i === 15) break;
    answer += str[i];
  }

  // 끝 점 제거
  let result = '';
  if(answer[answer.length - 1] === '.') {
    for(let i = 0; i < answer.length - 1; i++) {
      result += answer[i];
    }
  } else {
    result = answer;
  }

  if(result.length < 3) {
    if(result.length === 0) result = 'a'.repeat(3);
    if(result.length === 1) result = result.repeat(3);
    if(result.length === 2) result += result[1];
  }

  return result;
}

// 1. 대문자를 소문자로 o
// 2. 정규식 -> 소문자, 숫자, -, _, . 이외에 제거 o
// 3. i === . && i + 1 === . 이면 i++ o
// 4. new_id[0] === . || new_id[new_id.length - 1] === . continue o
// 5. new_id.trim().length === 0 이면 new_id = 'a' o
// 6. for(let i = 0; i < 15; i++) o
// 7. new_id.length <= 2 이면 마지막 문자를 길이 3 될 때까지 반복.

console.log(solution("...!@BaT#*..y.abcdefghijklm")); //"bat.y.abcdefghi"
console.log(solution("z-+.^.")); //	"z--"
console.log(solution("=.=")); // 	"aaa"
console.log(solution("123_.def")); // "123_.def"
console.log(solution("abcdefghijklmn.p")); //"abcdefghijklmn"
