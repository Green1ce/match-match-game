import './main-right.scss';
import { BaseComponent } from '../../../base-components';

export class MainRight extends BaseComponent {
  constructor() {
    super('div', ['main__right']);
    this.element.innerHTML = `
      <p class="main__registration-form"></p>
      <p class="main__settings"></p>
      <p class="main__card-field"></p>`;
  }
}
