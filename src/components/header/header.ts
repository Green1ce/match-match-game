import './header.scss';
import { BaseComponent } from '../base-components';
import { Logo } from './logo/logo';
import { Info } from './info/info';
import { Button } from './button/button';
import { User } from './user/user';

export class Header extends BaseComponent {
  private readonly logo: Logo;

  private readonly info: Info;

  private readonly reg: Button;

  private readonly user: User;

  constructor() {
    super('header', ['header']);
    this.logo = new Logo();
    this.info = new Info();
    this.reg = new Button();
    this.user = new User();
    this.render();
    this.addEvents();
  }

  render(): void {
    this.element.appendChild(this.logo.element);
    this.element.appendChild(this.info.element);
    this.element.appendChild(this.reg.element);
    this.element.appendChild(this.user.element);
  }

  addEvents(): void {
    this.reg.addEventReg();
  }
}
