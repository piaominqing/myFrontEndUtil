import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {LinkedList} from './js/util/linkedList/linkedList';

export class Todolist {
  constructor() {
    this.innerText = '';

    const linkedList = new LinkedList();
    linkedList.push(15);
    linkedList.push(10);
    console.log(linkedList.head);
    console.log(linkedList.head.next);

    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
