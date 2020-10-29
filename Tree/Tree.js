var TreeNode = (function () {
    function TreeNode(id) {
        this.id = id;
        this.children = new Map();
    }
    TreeNode.prototype.addChild = function (node) {
        this.children.set(node.id, node);
    };
    return TreeNode;
})();
var Tree = (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.addNode = function (parent, id) {
        const node = new TreeNode(id);
        if (!this.root) {
            this.root = node;
            return this.root;
        }
        parent.children.set(node.id, node);
        return parent.children.get(node.id);
    };
    Tree.prototype._DFT = function (node) {
        var _this = this;
        if (!node)
            return;
        console.log(node.id);
        node.children.forEach(function (childNode) {
            _this._DFT(childNode);
        });
    };
    Tree.prototype.DFT = function () {
        this._DFT(this.root);
    };
    Tree.prototype.print = function () {
        console.log(this.root);
    };
    return Tree;
})();
const t = new Tree();
t.DFT();
console.log("_______________________________________________________");
const one = t.addNode(t.root, 1);
t.DFT();
console.log("_______________________________________________________");
const map = new Map();
map.set(2, new TreeNode(2));
const two = t.addNode(one, 2);
const seven = t.addNode(one, 7);
const three = t.addNode(two, 3);
const six = t.addNode(two, 6);
const four = t.addNode(three, 4);
const five = t.addNode(three, 5);
t.DFT();
console.log("_______________________________________________________");
