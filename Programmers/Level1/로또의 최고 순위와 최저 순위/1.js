function solution(lottos, win_nums) {
  let countZero = 0;
  let correctNum = 0;

  const ranking = [0, 0];

  lottos.sort((a, b) => b - a);
  win_nums.sort((a, b) => b - a);

  for (let x of lottos) {
    if (x === 0) {
      countZero++;
      continue;
    }
    if (win_nums.includes(x)) {
      correctNum++;
      continue;
    }
  }

  ranking[0] = convertRank(countZero + correctNum);
  ranking[1] = convertRank(correctNum);

  return ranking;
}

function convertRank(num) {
  switch (num) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}


console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); //[3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //[1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); //	[1, 1]

// 내림차순 정렬
// 반복문 비교 -> 같으면 correctNum 증가, 0이면 countZero 증가
// ranking[0] = countZero + correntNum
// ranking[1] = correctNum
