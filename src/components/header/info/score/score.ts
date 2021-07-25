import './score.scss';
import { BaseComponent } from '../../../base-components';
import { router } from '../../../../shared/router';
import { BEST_SCORE } from '../../../../shared/CONST';

export class Score extends BaseComponent {
  constructor() {
    super('li', ['score']);
    this.element.innerHTML = `
      <p></p>
      <p>Best Score</p>
    `;
  }

  addEventScore(): void {
    this.element.addEventListener('click', () => {
      const hash = BEST_SCORE;
      window.location.hash = hash;
      router(hash);
      document.querySelector('.about-game')?.classList.remove('selected');
      document.querySelector('.score')?.classList.add('selected');
      document.querySelector('.game-settings')?.classList.remove('selected');
    });
  }
}
