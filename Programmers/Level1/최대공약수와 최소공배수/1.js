// function solution(n, m) {
//   let result = [];

//   //최대 공약수 구하기.
//   function findDivisor(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) result.push(i);
//     }
//     return result;
//   }

//   let divisors1;
//   let divisors2;
//   let divisors = [];

//   divisors1 = findDivisor(n);
//   divisors2 = findDivisor(m);

//   for(let i = 0; i < divisors1.length; i++) {
//     if(divisors2.includes(divisors1[i])) divisors.push(divisors1[i]);
//   }

//   const maxDivisor = Math.max(...divisors);
//   result.push(maxDivisor);

//   //최소 공배수 구하기.
//   let maxMultiple;
//   let min = Math.min(n, m);
//   let max = Math.max(n, m);

//   if (max % min === 0) result.push(max);
//   else maxMultiple = result.push(max * min);

//   return result;
// }

function solution(n, m) {
  let result = [];

  let maxDivisor = 0;
  let minMultiple = 0;

  // 최대공약수 구하기.
  for(let i = 1; i <= Math.max(n, m); i++) {
    if(n % i === 0 && m % i === 0) maxDivisor = i;
  }

  // 두 수의 곱 = 최대공약수 * 최소공배수
  // 최소공배수 = 두 수의 곱 / 최대공약수
  minMultiple = n * m / maxDivisor;

  result.push(maxDivisor);
  result.push(minMultiple);
  return result;
}

console.log(solution(3, 12));
console.log(solution(2, 5));
