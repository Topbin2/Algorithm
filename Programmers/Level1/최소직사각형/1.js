function solution(sizes) {
  // let big = [];
  // let small = [];

  // for(let x of sizes) {
  //   if(x[0] > x[1]) {
  //     big.push(x[0]);
  //     small.push(x[1]);
  //   } else {
  //     big.push(x[1]);
  //     small.push(x[0]);
  //   }
  // }

  // return Math.max(...big) * Math.max(...small);

  let result = [0, 0];
  sizes.forEach( arr => {
    let [a, b] = arr.sort((a,b) => b - a);
    if(a > result[0]) result[0] = a;
    if(b > result[1]) result[1] = b;
  })
  return result[0] * result[1];
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133