const each = function (collection, iteratee) {
  // TODO: 여기에 코드를 작성합니다.

  if(Array.isArray(collection)) {
    for(let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection)
    }
  } else {
    for(let key in collection) {
      iteratee(collection[key], key, collection);
    }
  }
};

const filter = function (arr, test) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  each(arr, (item) => {
    if(test(item)) result.push(item);
  })

  return result;
};

const reject = function (arr, test) {
  // TODO: 여기에 코드를 작성합니다.
  // TIP: 위에서 구현한 `filter` 함수를 사용해서 `reject` 함수를 구현해 보세요.
  let result = [];

  filter(arr, (item) => {
    if(!test(item)) result.push(item);
  })

  return result;
};

function test(item) {
  if(item % 2 === 0) return true;
  else return false;
}

reject([1,2,3,4,5], (item) => test(item));