import './button.scss';
import { BaseComponent } from '../../base-components';
import { START_PAGE } from '../../../shared/CONST';

export class Button extends BaseComponent {
  constructor() {
    super('button', ['header__button']);
    this.element.textContent = 'REGISTER NEW PLAYER';
    if (window.location.hash === START_PAGE) {
      this.element.classList.add('active');
    }
  }

  addEventReg(): void {
    this.element.addEventListener('click', () => {
      const REG_FORM = document.querySelector('.registration-form__wrapper');
      REG_FORM?.classList.add('active');
    });
  }
}
