import './info.scss';
import { BaseComponent } from '../../base-components';
import { AboutGame } from './about/about';
import { Score } from './score/score';
import { Settings } from './settings/settings';
import { GAME, START_PAGE } from '../../../shared/CONST';

export class Info extends BaseComponent {
  private readonly about: AboutGame;

  private readonly score: Score;

  private readonly settings: Settings;

  constructor() {
    super('ul', ['header__info']);
    this.about = new AboutGame();
    this.score = new Score();
    this.settings = new Settings();
    this.renderInfo();
    if (window.location.hash !== START_PAGE && window.location.hash !== GAME) {
      this.addEvents();
    }
  }

  renderInfo(): void {
    this.element.appendChild(this.about.element);
    this.element.appendChild(this.score.element);
    this.element.appendChild(this.settings.element);
  }

  addEvents(): void {
    this.about.addEventAbout();
    this.score.addEventScore();
    this.settings.addEventSettings();
  }
}
