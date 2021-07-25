import './content-wrapper.scss';
import { BaseComponent } from '../../../../base-components';
import { FirstName } from './first-name';
import { SecondName } from './second-name';
import { Email } from './email';

export class ContentWrapper extends BaseComponent {
  private readonly firstName: FirstName;

  private readonly secondName: SecondName;

  private readonly email: Email;

  constructor() {
    super('div', ['content__wrapper']);
    this.firstName = new FirstName();
    this.secondName = new SecondName();
    this.email = new Email();
    this.render();
  }

  render(): void {
    this.element.appendChild(this.firstName.element);
    this.element.appendChild(this.secondName.element);
    this.element.appendChild(this.email.element);
  }
}
