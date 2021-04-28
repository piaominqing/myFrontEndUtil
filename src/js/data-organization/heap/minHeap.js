import {defaultCompare, Compare} from '../nativeUtil';
import {swap} from '../util';
export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return null;
    }

    return Math.floor((index - 1) / 2);
  }

  insert(value) {
    if (value !== null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      
      return true;
    }

    return false;
  }

  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (
      index !== null &&
      this.compareFn(this.heap[parent], this.heap[index])
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinnimum() {
    return this.isEmpty() ? null : this.heap[0];
  }

  extract() {
    if (this.isEmpty()) {
      return null;
    }
    swap(this.heap,0 ,this.heap.length -1);
    this.heap.pop();
    this.siftDown(0);

    return ;
  }

  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (left < size && this.compareFn(this.heap[element], this.heap[left])) {
      element = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right])
    ) {
      element = right;
    }
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }
  output(){
      return this.heap.sort()
  }
}
