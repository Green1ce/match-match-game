import './game-cards.scss';
import { BaseComponent } from '../../base-components';
import { CardsSettingsHeader } from './cards-settings/cards-settings-header';
import { CardSettingsButtonWrapper } from './cards-settings/cards-settings';

export class GameCards extends BaseComponent {
  private readonly header: CardsSettingsHeader;

  private readonly settingsWrapper: CardSettingsButtonWrapper;

  constructor() {
    super('div', ['game-settings__cards']);
    this.header = new CardsSettingsHeader();
    this.settingsWrapper = new CardSettingsButtonWrapper();
    this.render();
  }

  render(): void {
    this.element.appendChild(this.header.element);
    this.element.appendChild(this.settingsWrapper.element);
  }
}
