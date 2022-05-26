function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  if(!str.length) return 0;

  let sum = 0;
  let onlyStr = '';

  for(let x of str) {
    if(x === ' ') continue;
    if(x.match(/[0-9]/g)) {
      sum += Number(x);
      continue;
    }
    if(typeof x === 'string') onlyStr += x;
  }

  return Math.round(sum / onlyStr.length);
}

let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2