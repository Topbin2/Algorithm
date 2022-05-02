// function factorial(num) {
//   let total = 1;
//   for(let i = num; i > 1; i--) {
//     total = total * i;
//   }
//   return total;
// }

function factorial(num) {
  if(num === 1) return num;
  return num * factorial(num - 1);
}

// 4 factorial(3) //24
//   3 factorial(2) //6
//     2 factorial(1) //2
//       1

console.log(factorial(4)); //24