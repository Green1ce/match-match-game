import './game-score.scss';
import { BaseComponent } from '../base-components';

export class GameScore extends BaseComponent {
  constructor() {
    super('div', ['game-score']);
    this.element.textContent = 'Тут должна была быть таблица с результатами, но я не успел ее сделать';
  }
}
