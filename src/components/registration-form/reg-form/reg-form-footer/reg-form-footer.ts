import './reg-form-footer.scss';
import { BaseComponent } from '../../../base-components';

export class RegFormFooter extends BaseComponent {
  constructor() {
    super('div', ['registration-form__footer']);
    this.element.innerHTML = `
      <button class="button-add">ADD USER</button>
      <button class="button-close">CANCEL</button>`;
  }
}
