function solution(n, lost, reserve) {
  const students = [];

  for(let i = 1; i <= n; i++) {
    students.push(1);
  }

  for(let i = 0; i < lost.length; i++) {
    students[lost[i] - 1] = 0;
  }

  for(let i = 0; i < reserve.length; i++) {
    students[reserve[i] - 1] += 1;
  }

  for(let i = 1; i < students.length; i++) {
    if(students[i] === 0 && students[i - 1] === 2) {
      students[i] = 1;
      students[i - 1] = 1;
    }
  }

  for(let i = 0; i < students.length - 1; i++) {
    if(students[i] === 0 && students[i + 1] === 2) {
      students[i] = 1;
      students[i + 1] = 1;
    }
  }

  return students.filter(el => el !== 0).length;

}

// 1. 모든 학생 체육복 하나씩(1) 갖는 배열 생성
// 2. 체육복 잃어버린 학생은 (0) 할당
// 3. 여분 체육복 있는 학생 1 증가
// 4. idx - 1  에서 빌릴 수 있는 경우
// 5. idx + 1 에서 빌릴 수 있는 경우

console.log(solution(5, [2, 4], [1, 3, 5])); //5
console.log(solution(5, [2, 4], [3])); //4
console.log(solution(3, [3], [1])); //2
