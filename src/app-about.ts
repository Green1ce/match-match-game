import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { RegForm } from './components/registration-form/registration-form';

export class AppAbout {
  private readonly header: Header;

  private readonly main: Main;

  private readonly regForm: RegForm;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new Main();
    this.regForm = new RegForm();
    this.render();
    this.addEvents();
  }

  render():void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);
    this.rootElement.appendChild(this.regForm.element);
  }

  addEvents(): void {
    this.regForm.closeRegForm();
    this.regForm.addUser();
  }
}
