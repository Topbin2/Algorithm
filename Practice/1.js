function solution(p) {
  const arr = new Array(p.length).fill(0);

  for(let i = 0; i < p.length - 1; i++) {
      let temp = p[i];
      const min = Math.min(...p.slice(i))
          for(let j = i + 1; j < p.length; j++) {
              if(p[j] === min && temp > p[j]) {
                  p[i] = p[j];
                  p[j] = temp;
                  arr[i]++;
                  arr[j]++;
              }
          }
  }

  return arr;
}
