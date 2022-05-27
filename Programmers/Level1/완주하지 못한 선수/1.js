function solution(participant, completion) {
  let result = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) return participant[i];
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // 'leo'
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // 'vinko'
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // 'mislav'
