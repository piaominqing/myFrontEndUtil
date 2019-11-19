//基于WeakMap创建栈
//弊端：可读性降低
const items = new WeakMap();
export class WeakMapStack {
  constructor () {
    items.set(this, []);
  }

  push (element){
    const s = items.get(this);
    s.push(element);
  }
  //栈size
  size () {
    const s = items.get(this);
    return s.length
  }
  //检查栈是否为空
  isEmpty () {
    const s = items.get(this);
    return !s.length;
  }
  pop(){
    const s = items.get(this);
    return s.pop();
  }
  peek(){
    const s = items.get(this);
    return s[s.length -1];
  }
  clear(){
    items.set(this, []);
  }
  toString(){
    const s = items.get(this);
    return s.toString();
  }
}