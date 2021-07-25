import './start-game.scss';
import { BaseComponent } from '../../../base-components';
import { router } from '../../../../shared/router';
import { GAME } from '../../../../shared/CONST';
import { cardsCheck } from '../../../../shared/cardsCheck';

export class StartGame extends BaseComponent {
  constructor() {
    super('div', ['header__start-game', 'active']);
    this.element.textContent = 'START GAME';
  }

  addClickEvent(): void {
    this.element.addEventListener('click', () => {
      cardsCheck(false);
      const hash = GAME;
      window.location.hash = hash;
      router(hash);
      document.querySelector('.header__start-game')?.classList.remove('active');
      document.querySelector('.header__stop-game')?.classList.add('active');
    });
  }
}
