import '../assets/css/common.css';
import '../assets/css/todolist.css';
import {makePublisher} from './js/design-pattern/publisher';

export class Todolist {
  constructor() {
    this.innerText = '';

    /** test 领域 */

    const paper = {
      daily() {
        this.publish('big news today');
      },
      monthly() {
        this.publish('interesting analysis', 'monthly');
      }
    };

    makePublisher(paper);

    const joe = {
      drinkCoffee(_paper) {
        console.log(`Just read ${_paper}`);
      },
      sundayPreNap(monthly) {
        console.log(`About to fall asleep reading this ${monthly}`);
      }
    };

    paper.subscribe(joe.drinkCoffee);
    paper.subscribe(joe.sundayPreNap, 'monthly');

    paper.daily();
    paper.daily();
    paper.daily();
    paper.monthly();

    makePublisher(joe);

    joe.tweet = function(msg) {
      this.publish(msg);
    };

    paper.readTweets = function(tweet) {
      alert(`Call big meeting! Someone ${tweet}`);
    };

    joe.subscribe(paper.readTweets);

    joe.tweet('hated the paper today');

    /** test 领域 */

    document.querySelector('#todolist').innerText = this.innerText;
  }
}

window.todolist = new Todolist();
