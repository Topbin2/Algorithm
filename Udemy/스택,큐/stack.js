// const stack = [];

// stack.push("google");
// stack.push("insta");
// stack.push("youtube");

// console.log(stack);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// Stack 이란 후입선출(LIFO)의 특성을 가지는 데이터구조이다. 마지막으로 들어온 값은 가장 먼저 나가게 된다.
// 만약 인덱스를 이용해 접근할 필요없이 LIFO 방식으로 데이터를 추가 삭제만 한다면 배열보다 연결리스트가 유리함
// Big O
// Insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack);
