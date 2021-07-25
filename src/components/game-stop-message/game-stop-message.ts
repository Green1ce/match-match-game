import './game-stop-message.scss';
import { BaseComponent } from '../base-components';

export class GameStopMessage extends BaseComponent {
  constructor() {
    super('div', ['game-stop-message']);
    this.element.textContent = 'Игра остановлена. Результата не будет. Можешь начать заново';
  }
}
