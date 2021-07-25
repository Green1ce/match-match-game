import { GameStopMessage } from './components/game-stop-message/game-stop-message';
import { Header } from './components/header/header';

export class AppStop {
  private readonly header: Header;

  private readonly message: GameStopMessage;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.message = new GameStopMessage();
    this.render();
  }

  render(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.message.element);
  }
}
