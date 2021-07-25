import './main-left.scss';
import { BaseComponent } from '../../../base-components';

export class MainLeft extends BaseComponent {
  constructor() {
    super('div', ['main__left']);
    this.element.innerHTML = `
    <div class="main__left-step">
      <p>1</p>
      <p>Register new player in game</p>
    </div>
    <div class="main__left-step">
      <p>2</p>
      <p>Configure your game settings</p>
    </div>
    <div class="main__left-step">
      <p>3</p>
      <p>Start you new game! Remember card positions and match it before times up</p>
    </div>`;
  }
}
