function solution(p) {
  const arr = new Array(p.length).fill(0);

  // [1, 0, 0, 1, 0]

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

  // [2, 5, 3, 1, 4] temp = 2, min = 1 [1, 0, 0, 1, 0]
  // [1, 5, 3, 2, 4] temp = 5, min = 2 [1, 1, 0, 2, 0]
  // [1, 2, 3, 5, 4] temp = 3, min = 4 
  // 