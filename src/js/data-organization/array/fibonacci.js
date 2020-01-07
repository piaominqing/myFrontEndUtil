export class Fibonacci {
  constructor(num) {
    this.fibonacciArray = [];
    if (!this.fibonacciArray.length) {
      this.fibonacciArray[1] = 1;
      this.fibonacciArray[2] = 1;
      for (let i = 3; i < num; i += 1) {
        this.fibonacciArray[i] = this.fibonacciArray[i - 1] + this.fibonacciArray[i - 2];
      }
    }
  }

  getFibonacci() {
    return this.fibonacciArray;
  }
}
