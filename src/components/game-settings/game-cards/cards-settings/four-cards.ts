import './cards-settings.scss';
import { BaseComponent } from '../../../base-components';
import { gameLevel } from '../../../../shared/settings';
import { EASY, RETURN } from '../../../../shared/CONST';

export class SettingsFourCards extends BaseComponent {
  constructor() {
    super('button', ['four-cards']);
    if (gameLevel(RETURN) === EASY) this.element.classList.add('game-level');
    this.element.textContent = '4x4 cards';
  }

  fourCardsEvent(): void {
    this.element.addEventListener('click', () => {
      this.element.classList.add('game-level');
      document.querySelector('.six-cards')?.classList.remove('game-level');
      gameLevel(EASY);
    });
  }
}
