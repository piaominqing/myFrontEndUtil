import {defaultEquals} from '../nativeUtil';
import {LinkedList} from './linkedList';

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

// eslint-disable-next-line require-jsdoc
function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  // 重写insert
  insert(element) {
    if (this.isImpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);

    return super.insert(element, pos);
  }

  // 获取插入的index
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i += 1) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }

    return i;
  }
}
