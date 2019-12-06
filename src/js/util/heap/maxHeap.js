import {MinHeap} from './minHeap';
import {defaultCompare, reverseCompare} from '../nativeUtil';

export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}
