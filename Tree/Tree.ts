type NodeID = number;

class TreeNode {
  id: NodeID;
  children: Map<NodeID, TreeNode>;

  constructor(id: NodeID) {
    this.id = id;
    this.children = new Map<NodeID, TreeNode>();
  }

  addChild(node: TreeNode) {
    this.children.set(node.id, node);
  }
}

class Tree {
  root: TreeNode

  constructor() {
    this.root = null;
  }

  addNode(parent: TreeNode, id: NodeID): TreeNode {
    const node = new TreeNode(id);
    if (!this.root) {
      this.root = node;
      return this.root;
    }
    parent.children.set(node.id, node);
    return parent.children.get(node.id);
  }

  _DFT(node: TreeNode) {
    if (!node) return;
    console.log(node.id);
    node.children.forEach((childNode) => {
      this._DFT(childNode)
    })
  }

  DFT() {
    this._DFT(this.root);
  }
}

const t = new Tree();
t.DFT();
console.log("_______________________________________________________");

const one = t.addNode(t.root, 1);
t.DFT()
console.log("_______________________________________________________");

const map = new Map<NodeID, TreeNode>();
map.set(2, new TreeNode(2))
const two = t.addNode(one, 2);
const seven = t.addNode(one, 7);
const three = t.addNode(two, 3);
const six = t.addNode(two, 6);
const four = t.addNode(three, 4);
const five = t.addNode(three, 5);
t.DFT()
console.log("_______________________________________________________");
