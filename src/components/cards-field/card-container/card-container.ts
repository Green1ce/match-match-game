import './card-container.scss';
import { BaseComponent } from '../../base-components';
import { gameLevel } from '../../../shared/settings';
import {
  RETURN, EASY, MEDIUM, TRUE_CHOICE, FALSE_CHOICE, FLIP_CLASS,
} from '../../../shared/CONST';
import { cardsCheck } from '../../../shared/cardsCheck';

let cardCounter = 0;

export class CardContainer extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    if (gameLevel(RETURN) === EASY) this.element.classList.add('four');
    if (gameLevel(RETURN) === MEDIUM) this.element.classList.add('six');
    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${image}')"></div>
        <div class="card__back"></div>
      </div>`;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  falseChoice(): void {
    this.element.classList.toggle(FALSE_CHOICE);
  }

  trueChoice(): void {
    this.element.classList.add(TRUE_CHOICE);
    cardCounter += 1;
    if (cardCounter === (gameLevel(RETURN) * gameLevel(RETURN))) {
      cardsCheck(true);
      cardCounter = 0;
    }
  }
}
