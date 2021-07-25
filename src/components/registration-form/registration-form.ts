import './registration-form.scss';
import { BaseComponent } from '../base-components';
import { router } from '../../shared/router';
import { Blur } from './blur/blur';
import { RegFormWrapper } from './reg-form/reg-form';
import { validator } from '../../shared/validator';
import { clearForm } from '../../shared/clearForm';
import { ABOUT_GAME } from '../../shared/CONST';

export class RegForm extends BaseComponent {
  private readonly blur: Blur;

  private readonly regForm: RegFormWrapper;

  constructor() {
    super('div', ['registration-form__wrapper']);
    this.blur = new Blur();
    this.regForm = new RegFormWrapper();
    this.render();
  }

  render(): void {
    this.element.appendChild(this.blur.element);
    this.element.appendChild(this.regForm.element);
  }

  closeRegForm(): void {
    document.querySelector('.button-close')?.addEventListener('click', () => {
      this.element.classList.remove('active');
      clearForm();
    });
  }

  addUser(): void {
    document.querySelector('.button-add')?.addEventListener('click', () => {
      if (validator()) {
        this.element.classList.remove('active');
        document.querySelector('.header__button')?.classList.remove('active');
        document.querySelector('.header__user')?.classList.add('active');
        const hash = ABOUT_GAME;
        window.location.hash = hash;
        router(hash);
      }
    });
  }
}
