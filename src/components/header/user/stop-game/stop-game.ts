import './stop-game.scss';
import { BaseComponent } from '../../../base-components';
import { router } from '../../../../shared/router';
import { GAME_STOP } from '../../../../shared/CONST';

export class StopGame extends BaseComponent {
  constructor() {
    super('button', ['header__stop-game']);
    this.element.textContent = 'STOP GAME';
  }

  addEventStopButton(): void {
    this.element.addEventListener('click', () => {
      const hash = GAME_STOP;
      window.location.hash = hash;
      router(hash);
      document.querySelector('.header__stop-game')?.classList.remove('active');
      document.querySelector('.header__start-game')?.classList.add('active');
    });
  }
}
