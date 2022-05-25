function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.

  const mappedToLength = arr.map((str) => str.length);
  
  const maxLength = Math.max(...mappedToLength);
  const minLength = Math.min(...mappedToLength);

  let maxValid = false;
  let minValid = false;

  let result = [];

  for(let i = arr.length - 1; i >= 0; i--) {
    if(!maxValid && arr[i].length === maxLength) {
      maxValid = true;
      continue;
    }

    if(!minValid && arr[i].length === minLength) {
      minValid = true;
      continue;
    }

    result.unshift(arr[i])
  }

  return result;
}

let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output); // --> ['where', 'the', 'word',]