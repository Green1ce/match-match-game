import './main.scss';
import { BaseComponent } from '../base-components';
import { MainWrapper } from './main-wrapper/main-wrapper';

export class Main extends BaseComponent {
  constructor() {
    super('main', ['main']);
    this.element.innerHTML = `
    <h6>How to play?</h6>`;
    this.element.appendChild(new MainWrapper().element);
  }
}
