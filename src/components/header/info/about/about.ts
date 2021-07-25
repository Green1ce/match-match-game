import './about.scss';
import { BaseComponent } from '../../../base-components';
import { router } from '../../../../shared/router';
import { ABOUT_GAME } from '../../../../shared/CONST';

export class AboutGame extends BaseComponent {
  constructor() {
    super('li', ['about-game']);
    this.element.innerHTML = `
      <p></p>
      <p>About Game</p>
    `;
  }

  addEventAbout(): void {
    this.element.addEventListener('click', () => {
      const hash = ABOUT_GAME;
      window.location.hash = hash;
      router(hash);
      document.querySelector('.about-game')?.classList.add('selected');
      document.querySelector('.score')?.classList.remove('selected');
      document.querySelector('.game-settings')?.classList.remove('selected');
    });
  }
}
