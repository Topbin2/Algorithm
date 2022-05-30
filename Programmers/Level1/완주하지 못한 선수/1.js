function solution(participant, completion) {

  // participant.sort();
  // completion.sort();

  // for (let i = 0; i < participant.length; i++) {
  //   if(participant[i] !== completion[i]) return participant[i];
  // }

  let obj = {};

  for(let x of participant) {
    if(!(x in obj)) obj[x] = 1;
    else obj[x]++;
  }

  for(let x of completion) {
    if(x in obj) obj[x]--;
  }

  for(let x in obj) {
    if(obj[x] === 1) return x;
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
