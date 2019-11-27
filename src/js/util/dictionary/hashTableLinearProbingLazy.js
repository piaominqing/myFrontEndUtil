import {defaultToString} from '../nativeUtil';
import {ValuePair} from './valuePair';
export class HashTableLinearProbingLazy {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // 散列函数
  djb2HashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i += 1) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }

    return hash % 1013;
  }

  hashCode(key) {
    return this.djb2HashCode(key);
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      if (this.table[position] === null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] !== null) {
          index += 1;
        }
        this.table[index] = new ValuePair(key, value);
      }

      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] === null) {
      return null;
    }

    if (this.table[position].key === key) {
      return this.table[position].value;
    }

    return this.table[this.getPosition(position, key)].value;
  }

  getPosition(position, key) {
    position += 1;
    while (this.table[position] !== null && this.table[position].key !== key) {
      position += 1;
    }

    return position;
  }

  remove(key) {
    let position = this.hashCode(key);
    if (this.table[position] === null) {
      return false;
    }
    if (this.table[position].key === key) {
      delete this.table[position];
      this.verifyRemoveSideEffect(key, position);

      return true;
    }

    position = this.getPosition(position, key);
    delete this.table[position];
    this.verifyRemoveSideEffect(key, position);

    return true;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] !== null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index += 1;
    }
  }
}
