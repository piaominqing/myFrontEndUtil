import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {Dictionary} from './js/util/dictionary/dictionary';
import {HashTable} from './js/util/dictionary/hashTable';

export class Todolist {
  constructor() {
    this.innerText = '';

    const hash = new HashTable();
    hash.put('Gandalf', 'gandalf@email.com');
    hash.put('John', 'john@email.com');
    hash.put('Tyrion', 'tyrion@email.com');

    console.log(`${hash.hashCode('Gandalf')}- Gandalf`);
    console.log(`${hash.hashCode('John')}- John`);
    console.log(`${hash.hashCode('Tyrion')}- Tyrion`);

    console.log(hash.get('Gandalf'));
    console.log(hash.get('Loiane'));

    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
