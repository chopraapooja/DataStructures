// How will you implement a linked list ?
class ListNode {
  data: any;
  next: ListNode;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode;
  constructor(nums: number[]) {
    this.head = null;
    for (let i = 0; i < nums.length; i++) {
      this.addNode(new ListNode(nums[i]));
    }
  }

  addNode(node: ListNode) {
    if (!this.head) {
      this.head = node;
      return;
    }

    let ptr: any = this.head;
    while (ptr.next) {
      ptr = ptr.next;
    }
    ptr.next = node;
  }

  traverse() {
    let ptr = this.head;
    while (ptr) {
      console.log(ptr.data);
      ptr = ptr.next;
    }
  }
}

const one = new LinkedList([1]);
one.traverse();

const l = new LinkedList([1, 2, 3]);
l.traverse();

const empty = new LinkedList([]);
empty.traverse();