import './cards-settings.scss';
import { BaseComponent } from '../../../base-components';
import { gameLevel } from '../../../../shared/settings';
import { RETURN, MEDIUM } from '../../../../shared/CONST';

export class SettingsSixCards extends BaseComponent {
  constructor() {
    super('button', ['six-cards']);
    if (gameLevel(RETURN) === MEDIUM) this.element.classList.add('game-level');
    this.element.textContent = '6x6 cards';
  }

  sixCardsEvent(): void {
    this.element.addEventListener('click', () => {
      this.element.classList.add('game-level');
      document.querySelector('.four-cards')?.classList.remove('game-level');
      gameLevel(MEDIUM);
    });
  }
}
