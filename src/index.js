import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {Deque} from './js/util/queue/deque';
import { hotPotato } from './js/util/util';

export class Todolist {
  constructor() {
    this.innerText = '';

    const names = ['John','Jack','Camila','Ingrid','Carl'];
    const result = hotPotato(names, 7);
    result.eliminated.forEach(name=>{console.log(`${name}在击鼓传花游戏中淘汰。`)});
    console.log(`胜利者：${result.winner}`);
    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
