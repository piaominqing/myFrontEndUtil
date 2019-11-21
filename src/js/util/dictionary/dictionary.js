import {defaultToString} from '../nativeUtil';
import {ValuePair} from '../valuePair';
// 字典 {key：value}
export class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // 检测一个键是否存在于字典中
  hasKey(key) {
    return this.table[this.toStrFn(key)] !== null;
  }

  // 在字典和ValuePair类中设置键和值
  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  // 从字典中移除一个值
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];

      return true;
    }

    return false;
  }

  // 从字典中检索一个值
  get(key) {
    return this.table[this.toStrFn(key)].value;
  }

  // 返回字典中所有valuePair
  keyValues() {
    return Object.values(this.table);
  }

  // 所有原始键名
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }
}
