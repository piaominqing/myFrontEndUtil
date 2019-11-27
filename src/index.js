import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {factorial} from './js/util/util';

export class Todolist {
  constructor() {
    this.innerText = '';

    console.log(factorial(5));

    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
