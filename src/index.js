import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {Deque} from './js/util/queue/deque';

export class Todolist {
  constructor() {
    this.innerText = '';

    const deque = new Deque();
    console.log(deque.isImpty());
    console.log(deque.toString());
    deque.addBack('John');
    deque.addBack('Jack');
    console.log(deque.toString());
    deque.addBack('Camila');
    console.log(deque.toString());
    console.log(deque.size());
    console.log(deque.isImpty());
    deque.removeFront();
    console.log(deque.toString());
    deque.removeBack();
    console.log(deque.toString());
    deque.addFront('John');
    console.log(deque.toString());
    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
