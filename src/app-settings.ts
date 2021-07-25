import { GameSettings } from './components/game-settings/game-settings';
import { Header } from './components/header/header';

export class AppSettings {
  private readonly header: Header;

  private readonly settings: GameSettings;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.settings = new GameSettings();
    this.render();
  }

  render(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.settings.element);
  }
}
