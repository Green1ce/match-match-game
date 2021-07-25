import './settings.scss';
import { BaseComponent } from '../../../base-components';
import { router } from '../../../../shared/router';
import { GAME_SETTINGS } from '../../../../shared/CONST';

export class Settings extends BaseComponent {
  constructor() {
    super('li', ['game-settings']);
    this.element.innerHTML = `
      <p></p>
      <p>Game Settings</p>
    `;
  }

  addEventSettings(): void {
    this.element.addEventListener('click', () => {
      const hash = GAME_SETTINGS;
      window.location.hash = hash;
      router(hash);
      document.querySelector('.about-game')?.classList.remove('selected');
      document.querySelector('.score')?.classList.remove('selected');
      document.querySelector('.game-settings')?.classList.add('selected');
    });
  }
}
