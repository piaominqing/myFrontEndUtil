import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {isHour} from './js/util/dataUtil';

export class Todolist {
  constructor() {
    this.innerText = '';

    console.log(isHour());

    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
