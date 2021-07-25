import { BaseComponent } from '../../../base-components';
import './reg-form-header.scss';

export class RegFormHeader extends BaseComponent {
  constructor() {
    super('h6', ['registration-form__header']);
    this.element.textContent = 'Registr new Player';
  }
}
