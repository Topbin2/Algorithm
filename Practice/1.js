function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.

  console.log(`giftBox: ${giftBox}`);

  for(let x of giftBox) {
    if(Array.isArray(x)) {
      return unpackGiftbox(...x, wish);
    }
    else {
      if(x === wish) return true;
    }
  }

  return false;
}

const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

// output = unpackGiftbox(giftBox, 'postcard');
// console.log(output); // --> true