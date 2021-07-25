import './cards-settings.scss';
import { BaseComponent } from '../../../base-components';

export class CardsSettingsHeader extends BaseComponent {
  constructor() {
    super('h6', ['cards-settings__header']);
    this.element.textContent = 'Game Cards:';
  }
}
