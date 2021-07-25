import './reg-form-content.scss';
import { BaseComponent } from '../../../base-components';
import { ContentWrapper } from './inputs/content-wrapper';
import { RegFormImg } from './reg-form-img/reg-form-img';

export class RegFormContent extends BaseComponent {
  private readonly contentWrapper: ContentWrapper;

  private readonly img: RegFormImg;

  constructor() {
    super('div', ['registration-form__content']);
    this.contentWrapper = new ContentWrapper();
    this.img = new RegFormImg();
    this.render();
  }

  render(): void {
    this.element.appendChild(this.contentWrapper.element);
    this.element.appendChild(this.img.element);
  }
}
