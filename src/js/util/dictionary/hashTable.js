import {defaultToString} from '../nativeUtil';
import {ValuePair} from './valuePair';

export class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // 散列函数
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i += 1) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];

    return valuePair ? valuePair.value : valuePair;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair !== null) {
      delete this.table[hash];

      return true;
    }

    return false;
  }

  toString(){
    if(this.isImpty()){
      return ''
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]}=>${this.table[keys[0]].toString()}}`;
    for(let i = 1; i < keys.length; i+=1){
      objString = `${objString},{${keys[i]}}=>
      ${this.table[keys[i]].toString()}`;
    }
    return objString;
  }
}
