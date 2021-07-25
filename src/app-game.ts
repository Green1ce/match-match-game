import { Header } from './components/header/header';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
import { gameLevel } from './shared/settings';
import { RETURN } from './shared/CONST';

export class AppGame {
  private readonly header: Header;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.game = new Game();
    this.render();
  }

  render(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
  }

  async start(): Promise<void> {
    const res = await fetch(`./images${gameLevel(RETURN)}.json`);
    const categories: ImageCategoryModel[] = await res.json();
    const CATEGORY = categories[0];
    const images = CATEGORY.images.map((name) => `${CATEGORY.category}/${name}`);
    this.game.newGame(images);
  }
}
