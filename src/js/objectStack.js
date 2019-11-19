//基于JavaScript对象的栈
//弊端：与数组相同，可任意修改属性
export class ObjectStack {
  constructor () {
    this.count = 0;
    this.items = {};
  }

  push (element){
    this.items[this.count] = element;
    this.count++;
  }
  //栈size
  size () {
    return this.count;
  }
  //检查栈是否为空
  isEmpty () {
    return this.count === 0
  }
  pop(){
    if(this.isEmpty()){
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear(){
    this.items = {};
    this.count = 0;
  }
  toString(){
    if(this.isEmpty()){
      return undefined;
    }
    let objString = `${this.items[0]}`;
    for(let i = 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }
    return objString
  }
}