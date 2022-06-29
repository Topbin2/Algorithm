// 이진트리
// 각 부모 노드가 최대 두 개의 자식을 가질 수 있다

// 이진 탐색 트리
// 이진트리의 종류 중 하나
// 부모 노드의 왼쪽에 있는 노드들은 부모보다 항상 작다.
// 부모 노드의 오른쪽에 있는 노드들은 부모보다 항상 크다.

// 빅오
// Insertion - O(log n)
// Searching - O(log n)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if(this.root === null) return false;
    let current = this.root;

    while(current) {
      if(value < current.value) {
        current = current.left;
      } else if(value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

  //         20
  //     14      25
  // 10    17        30

  // current = 20 value = 11
  // current = 20 value = 11
  // current = 10 value = 11


const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
