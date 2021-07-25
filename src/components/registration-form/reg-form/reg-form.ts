import './reg-form.scss';
import { BaseComponent } from '../../base-components';
import { RegFormHeader } from './reg-form-header/reg-form-header';
import { RegFormContent } from './reg-form-content/reg-form-content';
import { RegFormFooter } from './reg-form-footer/reg-form-footer';

export class RegFormWrapper extends BaseComponent {
  private readonly header: RegFormHeader;

  private readonly content: RegFormContent;

  private readonly footer: RegFormFooter;

  constructor() {
    super('div', ['registration-form']);
    this.header = new RegFormHeader();
    this.content = new RegFormContent();
    this.footer = new RegFormFooter();
    this.render();
  }

  render(): void {
    this.element.appendChild(this.header.element);
    this.element.appendChild(this.content.element);
    this.element.appendChild(this.footer.element);
  }
}
