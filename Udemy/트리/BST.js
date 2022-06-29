// 이진트리
// 각 부모 노드가 최대 두 개의 자식을 가질 수 있다

// 이진 탐색 트리
// 이진트리의 종류 중 하나
// 부모 노드의 왼쪽에 있는 노드들은 부모보다 항상 작다.
// 부모 노드의 오른쪽에 있는 노드들은 부모보다 항상 크다.

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
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
