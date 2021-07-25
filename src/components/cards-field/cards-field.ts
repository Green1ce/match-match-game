import './cards-field.scss';
import { BaseComponent } from '../base-components';
import { CardContainer } from './card-container/card-container';
import { SHOW_TIME } from '../../shared/CONST';

export class CardsField extends BaseComponent {
  private cards: CardContainer[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: CardContainer[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME);
  }
}
