import './cards-settings.scss';
import { BaseComponent } from '../../../base-components';
import { SettingsFourCards } from './four-cards';
import { SettingsSixCards } from './six-cards';

export class CardSettingsButtonWrapper extends BaseComponent {
  private readonly fourCards: SettingsFourCards;

  private readonly sixCards: SettingsSixCards;

  constructor() {
    super('div', ['cards-settings__buttons-wrapper']);
    this.fourCards = new SettingsFourCards();
    this.sixCards = new SettingsSixCards();
    this.render();
    this.addEvents();
  }

  render(): void {
    this.element.appendChild(this.fourCards.element);
    this.element.appendChild(this.sixCards.element);
  }

  addEvents(): void {
    this.fourCards.fourCardsEvent();
    this.sixCards.sixCardsEvent();
  }
}
