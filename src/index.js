import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {BinarySearchTree} from './js/util/tree/binarySearchTree';

export class Todolist {
  constructor() {
    this.innerText = '';

    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    const printNode = value => console.log(value);
    tree.inOrderTraverse(printNode);

    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
