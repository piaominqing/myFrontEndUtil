import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {decimalToBinary} from './js/util/util';


export class Todolist {
  constructor() {
    this.innerText = ''

    this.innerText = decimalToBinary(100, 2);
    console.log(`test:${this.innerText}`)
    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
