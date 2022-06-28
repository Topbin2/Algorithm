const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.

  const stack = [];

  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  for(let i = 0; i < sample.length; i++) {
    if(binarySearch(base, sample[i])) stack.push(sample[i]);
  }

  if(stack.length === sample.length) return true;
  else return false;
};

function binarySearch(arr, val) {
	  let start = 0;
  	let end = arr.length - 1;
  
  	while(start <= end) {
	  	let mid = Math.floor((start + end) / 2);
		  if(arr[mid] === val) return true;
      else if(arr[mid] < val) start = mid + 1;
      else if(arr[mid] > val) end = mid - 1;
    }
  
  	return false;
}

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false