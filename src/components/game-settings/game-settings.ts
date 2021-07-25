import './game-settings.scss';
import { BaseComponent } from '../base-components';
import { GameCards } from './game-cards/game-cards';

export class GameSettings extends BaseComponent {
  private readonly cardsSettings: GameCards;

  constructor() {
    super('div', ['game-settings__wrapper']);
    this.cardsSettings = new GameCards();
    this.render();
  }

  render(): void {
    this.element.appendChild(this.cardsSettings.element);
  }
}
