import { GameScore } from './components/game-score/game-score';
import { Header } from './components/header/header';

export class AppScore {
  private readonly header: Header;

  private readonly score: GameScore;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.score = new GameScore();
    this.render();
  }

  render(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.score.element);
  }
}
