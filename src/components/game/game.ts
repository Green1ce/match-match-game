import { cardsCheck } from '../../shared/cardsCheck';
import {
  END, FLIP_DELAY, RETURN, START,
} from '../../shared/CONST';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-components';
import { CardContainer } from '../cards-field/card-container/card-container';
import { CardsField } from '../cards-field/cards-field';
import { GameTimer } from '../cards-field/timer/game-timer';

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private readonly timer: GameTimer;

  private activeCard?: CardContainer;

  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.timer = new GameTimer();
    this.render();
  }

  render(): void {
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  newGame(image: string[]): void {
    this.cardsField.clear();
    const cards = image
      .concat(image)
      .map((url) => new CardContainer(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
    this.timer.gameTimer(START);
  }

  private async cardHandler(card: CardContainer) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image === card.image) {
      this.activeCard.trueChoice();
      card.trueChoice();
    }

    if (this.activeCard.image !== card.image) {
      this.activeCard.falseChoice();
      card.falseChoice();
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.activeCard.falseChoice();
      card.falseChoice();
    }

    if (cardsCheck(RETURN)) {
      this.timer.gameTimer(END);
      this.timer.result();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
