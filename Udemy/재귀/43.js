function countDown(num) {
  if(num === 0) {
    console.log('All Done!!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(5);


function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(4); // 10

// 4 + sumRange(3) // 10
//   3 + sumRange(2) // 6
//     2 + sumRange(1) // 3
//       1