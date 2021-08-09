// Range Minimum/Maximum Queue
// 单调队列
// 递减单调队列
var MaxQueue = function() {
    this.q = [];
    this.mq = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.mq.length ? this.mq[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.q.push(value);
    while(this.mq.length && value > this.mq[this.mq.length - 1]) this.mq.pop();
    this.mq.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.q.length === 0) return -1;
    if(this.q[0] === this.mq[0]) this.mq.shift();
    return this.q.shift();
};