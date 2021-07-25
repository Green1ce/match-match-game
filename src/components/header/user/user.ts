import './user.scss';
import { BaseComponent } from '../../base-components';
import { StartGame } from './start-game/start-game';
import { UserIcon } from './user-icon/user-icon';
import { StopGame } from './stop-game/stop-game';
import { START_PAGE } from '../../../shared/CONST';

export class User extends BaseComponent {
  private readonly start: StartGame;

  private readonly stop: StopGame;

  private readonly icon: UserIcon;

  constructor() {
    super('div', ['header__user', 'active']);
    if (window.location.hash === START_PAGE) {
      this.element.classList.remove('active');
    }
    this.start = new StartGame();
    this.stop = new StopGame();
    this.icon = new UserIcon();
    this.render();
    this.addEvents();
  }

  render(): void {
    this.element.appendChild(this.start.element);
    this.element.appendChild(this.stop.element);
    this.element.appendChild(this.icon.element);
  }

  addEvents(): void {
    this.start.addClickEvent();
    this.stop.addEventStopButton();
  }
}
