const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el))
  .slice(1);
let n = Number(input[0]);

console.log(input);

class MaxBinaryHeap {
  constructor() {
    this.values = []; // 힙은 일반적으로 배열로 표현한다.
  }

  // 배열의 맨 끝에 노드를 넣어주고 bubbleUp 메소드를 통해 힙의 특성에 맞게 노드들의 자리를 조정한다.
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // 부모 노드의 인덱스를 찾아 올라가며 대소관계를 비교하여 자리를 바꿔준다.
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // 가장 큰 값을 찾아 제거하고 리턴하는 메소드
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  // 자식 노드의 인덱스를 찾아 내려가며 대소관계를 비교하여 자리를 바꿔준다.
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const queue = new MaxBinaryHeap();

for (let i = 0; i < input.length; i++) {
  queue.insert(input[i]);
}

console.log(queue);
