// const queue = [];

// queue.push(1);
// queue.push(2);
// queue.push(3);

// queue.shift();

//BigO
// 연결리스트를 사용할 경우
// Insert - O(1)
// Remove - O(1)
// Queue 선입선출(FIFO) 특성을 가지는 데이터구조이다. 가장 먼저 들어온 값이 가장 먼저 나간다.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
