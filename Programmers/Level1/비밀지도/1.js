function solution(n, arr1, arr2) {
  
  function convertNums(arr) {
    const newArr = arr.map(num => num.toString(2));
    for(let i = 0; i < arr.length; i++) {
      if(newArr[i].length < n) newArr[i] = '0'.repeat(n - newArr[i].length) + newArr[i];
    }
    return newArr;
  }

  const newArr1 = convertNums(arr1);
  const newArr2 = convertNums(arr2);

  const result = [];

  for(let i = 0; i < newArr1.length; i++) {
    let str = '';
    for(let j = 0; j < newArr1[i].length; j++) {
      if(newArr1[i][j] === '1' || newArr2[i][j] === '1') str += '#';
      if(newArr1[i][j] === '0' && newArr2[i][j] === '0') str += ' ';
    }
    result.push(str);
  }

  return result;
}

console.log(solution(5, [9,20,28,18,11], [30,1,21,17,28])); //["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])); //["######", "### #", "## ##", " #### ", " #####", "### # "]