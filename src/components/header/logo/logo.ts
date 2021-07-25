import './logo.scss';
import { BaseComponent } from '../../base-components';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['header__logo']);
    this.element.innerHTML = `
      <p>MATCH</p>
      <p>MATCH</p>
    `;
  }
}
