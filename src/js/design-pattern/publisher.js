// 发布者
const publisher = {
  /**
   * 存储订阅者对象
   * 属性为类型，值表示该类型的订阅者
   */
  subscribers: {
    any: [] // event type: subscribers
  },
  /**
   * 添加订阅者
   * @param {Function} fn 订阅者函数
   * @param {String} type 订阅者类型
   */
  subscribe(fn, type) {
    type = type || 'any';
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  /**
   * 删除订阅者
   * @param {Function} fn 订阅者函数
   * @param {String} type 订阅者类型
   */
  unsubscribe(fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  /**
   * 发布时执行订阅者的函数
   * @param {any} publication 发布
   * @param {String} type 发布类型
   */
  publish(publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  /**
   * 执行订阅者函数的辅助函数
   * @param {*} action 发布标识
   * @param {any} arg 发布
   * @param {String} type 发布类型
   */
  visitSubscribers(action, arg, type) {
    const pubtype = type || 'any';
    const subscribers = this.subscribers[pubtype];
    const max = subscribers.length;

    for (let i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else if (subscribers[i] === arg) {
        subscribers.splice(i, 1);
      }
    }
  }
};

/**
 * 创建发布者util函数
 * @param {*} o 对象
 */
export function makePublisher(o) {
  let i;
  // 将属性和函数赋值给传入的对象
  for (i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
      o[i] = publisher[i];
    }
  }
  // 初始化订阅者存储对象
  o.subscribers = {any: []};
}
