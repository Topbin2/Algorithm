function solution(survey, choices) {
  let answer = '';
  const types = ["RT", "CF", "JM", "AN"]
  const score = {"R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0};
  
  for (let i = 0; i < survey.length; i++) {
      if (choices[i] < 4) {
          score[survey[i][0]] += Math.abs(choices[i] - 4);
      } else {
          score[survey[i][1]] += choices[i] - 4;
      }
  }
  
  for (let type of types) {
      score[type[0]] < score[type[1]] ? answer += type[1] : answer += type[0]
  }
  
  return answer;
}
console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); //"TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); //"RCJA"

// 1 -> 3
// 2 -> 2
// 3 -> 1
// 4 -> 0
// 5 -> 1
// 6 -> 2
// 7 -> 3
