import './main-wrapper.scss';
import { BaseComponent } from '../../base-components';
import { MainLeft } from './main-left/main-left';
import { MainRight } from './main-right/main-right';

export class MainWrapper extends BaseComponent {
  constructor() {
    super('div', ['main__wrapper']);
    this.element.appendChild(new MainLeft().element);
    this.element.appendChild(new MainRight().element);
  }
}
