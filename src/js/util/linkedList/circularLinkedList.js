import {LinkedList} from './linkedList';
import {defaultEquals} from '../nativeUtil';
// 循环链表
// 与链表不同的是 最后一个node的next指向第一个node
export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  // 重写insert
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          this.head = node;

          // 更新最后一个元素的next为第一个元素
          current = this.getElementAt(this.size());
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
    }
  }

  // 重写removeAt
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = null;
        } else {
          const removed = this.head;
          this.head = this.head.next;
          current = this.getElementAt(this.size());
          current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count -= 1;

      return current.element;
    }

    return null;
  }
}
